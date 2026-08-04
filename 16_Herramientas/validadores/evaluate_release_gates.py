#!/usr/bin/env python3
"""Evalúa evidencia técnica G0-G5 sin otorgar aprobación GOEI."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[2]
SEMVER = re.compile(r"^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$")
RELEASE_ID = re.compile(r"^GOEI-(?:RC-v\d+\.\d+\.\d+-rc\.\d+|v\d+\.\d+\.\d+)$")
STATUSES = {"draft", "candidate", "approved", "published", "withdrawn"}
COMPONENT_REGISTRY = Path("00_Gobernanza/Registro_de_componentes.md")
DECISION_REGISTRY = Path("00_Gobernanza/Registro_de_decisiones.md")


def safe_file(root: Path, value: Any) -> bool:
    if not isinstance(value, str) or not value.strip():
        return False
    candidate = (root / value).resolve()
    try:
        candidate.relative_to(root.resolve())
    except ValueError:
        return False
    return candidate.is_file()


def valid_manifest(root: Path, value: Any) -> bool:
    if not safe_file(root, value):
        return False
    try:
        payload = json.loads((root / value).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return False
    files = payload.get("files")
    return payload.get("schemaVersion") == "1.0" and isinstance(files, list) and payload.get("fileCount") == len(files)


def registry_text(root: Path, relative: Path) -> str:
    path = root / relative
    return path.read_text(encoding="utf-8") if path.is_file() else ""


def gate(passed: bool, errors: list[str]) -> dict[str, Any]:
    return {"passed": passed, "errors": errors}


def evaluate(data: dict[str, Any], root: Path = ROOT) -> dict[str, Any]:
    components = data.get("components") if isinstance(data.get("components"), list) else []
    decisions = data.get("decisions") if isinstance(data.get("decisions"), list) else []
    component_registry = registry_text(root, COMPONENT_REGISTRY)
    decision_registry = registry_text(root, DECISION_REGISTRY)

    g0_errors = []
    if data.get("schemaVersion") != "1.0":
        g0_errors.append("schemaVersion debe ser 1.0")
    if not RELEASE_ID.fullmatch(str(data.get("releaseId", ""))):
        g0_errors.append("releaseId inválido")
    if not SEMVER.fullmatch(str(data.get("version", ""))):
        g0_errors.append("version no cumple SemVer")
    if data.get("status") not in STATUSES:
        g0_errors.append("status inválido")
    if not str(data.get("scope", "")).strip() or data.get("scope") == "PENDIENTE":
        g0_errors.append("scope no definido")
    if not components:
        g0_errors.append("no hay componentes declarados")
    component_ids = []
    for index, item in enumerate(components):
        if not isinstance(item, dict):
            g0_errors.append(f"components[{index}] no es objeto")
            continue
        component_ids.append(item.get("id"))
        for field in ("id", "version", "path"):
            if not str(item.get(field, "")).strip():
                g0_errors.append(f"components[{index}].{field} ausente")
        if item.get("path") and not safe_file(root, item.get("path")):
            g0_errors.append(f"components[{index}].path no existe o escapa del repositorio")
        if item.get("id") and f"| {item['id']} |" not in component_registry:
            g0_errors.append(f"components[{index}].id no consta en el registro maestro")
    if len(component_ids) != len(set(component_ids)):
        g0_errors.append("IDs de componentes duplicados")

    g1_errors = []
    if not decisions:
        g1_errors.append("no hay decisiones declaradas")
    for index, item in enumerate(decisions):
        if not isinstance(item, dict):
            g1_errors.append(f"decisions[{index}] no es objeto")
            continue
        if item.get("status") != "approved":
            g1_errors.append(f"decisions[{index}] no está aprobada explícitamente")
        if not safe_file(root, item.get("recordPath")):
            g1_errors.append(f"decisions[{index}].recordPath no existe")
        if item.get("id") and f"**Decisión:** {item['id']} " not in decision_registry:
            g1_errors.append(f"decisions[{index}].id no consta en el registro oficial")

    g2_errors = []
    traceability = data.get("traceabilityArtifacts")
    if not isinstance(traceability, list) or not traceability:
        g2_errors.append("no hay artefactos de trazabilidad")
    else:
        for index, path in enumerate(traceability):
            if not safe_file(root, path):
                g2_errors.append(f"traceabilityArtifacts[{index}] no existe")
    for index, item in enumerate(components):
        if isinstance(item, dict) and not safe_file(root, item.get("traceabilityPath")):
            g2_errors.append(f"components[{index}].traceabilityPath no existe")

    g3_errors = []
    validation = data.get("technicalValidation")
    if not isinstance(validation, dict) or validation.get("passed") is not True:
        g3_errors.append("validación técnica no consta como satisfactoria")
    else:
        if not str(validation.get("command", "")).strip():
            g3_errors.append("comando de validación ausente")
        if not safe_file(root, validation.get("recordPath")):
            g3_errors.append("evidencia de validación inexistente")
    if not valid_manifest(root, data.get("manifestPath")):
        g3_errors.append("manifiesto inexistente o inválido")

    g4_errors = []
    comparison = data.get("baselineComparison")
    if not isinstance(comparison, dict):
        g4_errors.append("comparación de baseline ausente")
    else:
        if not safe_file(root, comparison.get("recordPath")):
            g4_errors.append("registro de comparación inexistente")
        if not safe_file(root, comparison.get("impactAnalysisPath")):
            g4_errors.append("análisis de impacto inexistente")

    g5_errors = []
    approval = data.get("approval")
    if not isinstance(approval, dict) or approval.get("approved") is not True:
        g5_errors.append("aprobación explícita ausente")
    else:
        if not str(approval.get("authority", "")).strip() or approval.get("authority") == "PENDIENTE":
            g5_errors.append("autoridad aprobadora ausente")
        if not str(approval.get("date", "")).strip():
            g5_errors.append("fecha de aprobación ausente")
        if not safe_file(root, approval.get("recordPath")):
            g5_errors.append("acto de aprobación inexistente")

    gates = {
        "G0": gate(not g0_errors, g0_errors),
        "G1": gate(not g1_errors, g1_errors),
        "G2": gate(not g2_errors, g2_errors),
        "G3": gate(not g3_errors, g3_errors),
        "G4": gate(not g4_errors, g4_errors),
        "G5": gate(not g5_errors, g5_errors),
    }
    return {
        "schemaVersion": "1.0",
        "releaseId": data.get("releaseId"),
        "gates": gates,
        "eligibleForPromotion": all(item["passed"] for item in gates.values()),
        "notice": "Resultado técnico; no constituye aprobación científica ni institucional.",
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("dossier", help="Expediente JSON")
    parser.add_argument("--root", default=str(ROOT), help="Raíz del repositorio")
    args = parser.parse_args()
    try:
        data = json.loads(Path(args.dossier).read_text(encoding="utf-8"))
        result = evaluate(data, Path(args.root).resolve())
    except (OSError, json.JSONDecodeError) as error:
        parser.error(str(error))
    print(json.dumps(result, ensure_ascii=False, indent=2, sort_keys=True))
    return 0 if result["eligibleForPromotion"] else 2


if __name__ == "__main__":
    raise SystemExit(main())
