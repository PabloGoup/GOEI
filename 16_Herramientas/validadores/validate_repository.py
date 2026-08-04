#!/usr/bin/env python3
"""Validador read-only de configuración documental GOEI."""

from __future__ import annotations

import hashlib
import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
CONFIG_PATH = Path(__file__).with_name("goei_control.json")
MARKDOWN_LINK = re.compile(r"\[[^\]]*\]\(([^)]+)\)")
ISSUE_ROW = re.compile(r"^\|\s*(GOEI-ISS-\d{3,4})\s*\|")
COMPONENT_ROW = re.compile(r"^\|\s*(GOEI-[A-Z][A-Z0-9-]*-\d{3,4})\s*\|")
TRACEABILITY_ROW = re.compile(r"^\|\s*(GOEI-[A-Z][A-Z0-9-]*-\d{3,4})(?:\s+[^|]+)?\s*\|")
BACKTICK_PATH = re.compile(r"`([^`]+)`")
THESIS_REQUIREMENT_ROW = re.compile(r"^\|\s*(THS-(?:I|II|III|IV|ANX|VIS|PUB|PRD)-\d{2})\s*\|")


class Report:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []
        self.checks = 0

    def require(self, condition: bool, message: str) -> None:
        self.checks += 1
        if not condition:
            self.errors.append(message)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(65536), b""):
            digest.update(chunk)
    return digest.hexdigest()


def table_ids(path: Path, pattern: re.Pattern[str]) -> list[str]:
    return [match.group(1) for line in path.read_text(encoding="utf-8").splitlines() if (match := pattern.match(line))]


def validate() -> Report:
    report = Report()
    config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))

    for relative in config["requiredArtifacts"]:
        path = ROOT / relative
        report.require(path.is_file(), f"Falta artefacto requerido: {relative}")
        if path.is_file():
            report.require(path.stat().st_size > 0, f"Artefacto vacío: {relative}")

    for relative, expected in config["frozenArtifacts"].items():
        path = ROOT / relative
        report.require(path.is_file(), f"Falta artefacto congelado: {relative}")
        if path.is_file():
            actual = sha256(path)
            report.require(actual == expected, f"Checksum alterado: {relative}; esperado {expected}, obtenido {actual}")

    broken_links: list[str] = []
    for document in ROOT.rglob("*.md"):
        text = document.read_text(encoding="utf-8")
        for target in MARKDOWN_LINK.findall(text):
            if target.startswith(("http://", "https://", "mailto:", "#")):
                continue
            local_target = target.split("#", 1)[0]
            if not local_target:
                continue
            resolved = (document.parent / local_target).resolve()
            if not resolved.exists():
                broken_links.append(f"{document.relative_to(ROOT)} -> {local_target}")
    report.require(not broken_links, "Enlaces locales rotos: " + "; ".join(broken_links))

    issue_locations: dict[str, list[str]] = {}
    for relative in config["issueRegistries"]:
        path = ROOT / relative
        report.require(path.is_file(), f"Falta registro de Issues: {relative}")
        if path.is_file():
            for issue_id in table_ids(path, ISSUE_ROW):
                issue_locations.setdefault(issue_id, []).append(relative)
    duplicates = {key: value for key, value in issue_locations.items() if len(value) > 1}
    report.require(not duplicates, f"Issues definidos en múltiples registros: {duplicates}")

    component_path = ROOT / config["componentRegistry"]
    if component_path.is_file():
        ids = table_ids(component_path, COMPONENT_ROW)
        duplicate_components = sorted({item for item in ids if ids.count(item) > 1})
        report.require(not duplicate_components, f"IDs duplicados en registro de componentes: {duplicate_components}")

        missing_canonical_paths: list[str] = []
        for line in component_path.read_text(encoding="utf-8").splitlines():
            match = COMPONENT_ROW.match(line)
            if not match:
                continue
            paths = BACKTICK_PATH.findall(line)
            if not paths or not (ROOT / paths[-1]).is_file():
                missing_canonical_paths.append(match.group(1))
        report.require(
            not missing_canonical_paths,
            f"Componentes sin ruta canónica válida: {missing_canonical_paths}",
        )

        traceability_path = ROOT / config["traceabilityMatrix"]
        report.require(traceability_path.is_file(), f"Falta matriz de trazabilidad: {config['traceabilityMatrix']}")
        if traceability_path.is_file():
            traceability_ids = set(table_ids(traceability_path, TRACEABILITY_ROW))
            untraced = sorted(set(ids) - traceability_ids)
            orphan_traces = sorted(traceability_ids - set(ids))
            report.require(not untraced, f"Componentes sin fila de trazabilidad: {untraced}")
            report.require(not orphan_traces, f"Filas de trazabilidad sin componente registrado: {orphan_traces}")

    for artifact_relative, status_relative in config.get("quarantinedArtifacts", {}).items():
        artifact = ROOT / artifact_relative
        status = ROOT / status_relative
        report.require(artifact.is_file(), f"Falta artefacto en cuarentena: {artifact_relative}")
        report.require(status.is_file(), f"Falta sidecar de cuarentena: {status_relative}")
        if status.is_file():
            status_text = status.read_text(encoding="utf-8").upper()
            report.require("CUARENTENA" in status_text, f"Sidecar sin estado CUARENTENA: {status_relative}")

    thesis = config.get("thesisRequirements", {})
    thesis_document = ROOT / thesis.get("document", "")
    coverage_matrix = ROOT / thesis.get("coverageMatrix", "")
    report.require(thesis_document.is_file(), f"Falta Plan Maestro de tesis: {thesis.get('document')}")
    report.require(coverage_matrix.is_file(), f"Falta matriz de cobertura de tesis: {thesis.get('coverageMatrix')}")
    if coverage_matrix.is_file():
        requirement_ids = table_ids(coverage_matrix, THESIS_REQUIREMENT_ROW)
        duplicates = sorted({item for item in requirement_ids if requirement_ids.count(item) > 1})
        report.require(not duplicates, f"Requisitos de tesis duplicados: {duplicates}")
        for prefix, expected_count in thesis.get("requiredPrefixes", {}).items():
            actual = sum(item.startswith(prefix) for item in requirement_ids)
            report.require(
                actual == expected_count,
                f"Cobertura de tesis incompleta para {prefix}: esperado {expected_count}, obtenido {actual}",
            )

    state_path = ROOT / config["programState"]
    report.require(state_path.is_file(), f"Falta estado de programa: {config['programState']}")
    if state_path.is_file():
        state = json.loads(state_path.read_text(encoding="utf-8"))
        for phase in state["phases"]:
            if phase["status"] == "complete":
                report.require(bool(phase.get("evidence")), f"Fase completa sin evidencia: {phase['id']}")
            if phase["status"] in {"blocked", "awaiting_approval"}:
                report.require(bool(phase.get("blockers")), f"Fase bloqueada sin blocker: {phase['id']}")

    return report


def main() -> int:
    report = validate()
    print(f"GOEI repository checks: {report.checks}")
    for warning in report.warnings:
        print(f"WARNING: {warning}")
    for error in report.errors:
        print(f"ERROR: {error}")
    if report.errors:
        print(f"RESULT: FAIL ({len(report.errors)} errors)")
        return 1
    print("RESULT: PASS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
