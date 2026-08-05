#!/usr/bin/env python3
"""Construye una proyección determinista de los registros maestros GOEI."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
COMPONENTS = ROOT / "00_Gobernanza/Registro_de_componentes.md"
TRACEABILITY = ROOT / "00_Gobernanza/Matriz_de_trazabilidad.md"
DECISIONS = ROOT / "00_Gobernanza/Registro_de_decisiones.md"
CONFIG = ROOT / "16_Herramientas/validadores/goei_control.json"
OUTPUT = Path(__file__).with_name("knowledge_graph.registry.json")
COMPONENT_ID = re.compile(r"^GOEI-[A-Z][A-Z0-9-]*-\d{3,4}$")
DECISION_TOKEN = r"D-(?:\d{3}(?:-REV)?|B4A-\d{3})"
DECISION_ID = re.compile(DECISION_TOKEN)
ISSUE_ID = re.compile(r"^GOEI-ISS-\d{3,4}$")


def rows(path: Path) -> list[list[str]]:
    parsed = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.startswith("|") or set(line.replace("|", "").replace("-", "").replace(":", "").strip()) == set():
            continue
        cells = [cell.strip().strip("`") for cell in line.strip().strip("|").split("|")]
        parsed.append(cells)
    return parsed


def build() -> dict:
    nodes: dict[str, dict] = {}
    edges: dict[str, dict] = {}

    def node(node_id: str, node_type: str, **properties: object) -> None:
        nodes[node_id] = {"id": node_id, "type": node_type, "properties": properties}

    def edge(edge_id: str, relation: str, source: str, target: str, source_document: str) -> None:
        edges[edge_id] = {
            "id": edge_id,
            "type": relation,
            "source": source,
            "target": target,
            "sourceDocument": source_document,
        }

    trace_by_component: dict[str, list[str]] = {}
    for cells in rows(TRACEABILITY):
        match = re.match(r"^(GOEI-[A-Z][A-Z0-9-]*-\d{3,4})(?:\s+.*)?$", cells[0]) if cells else None
        if match and len(cells) >= 8:
            trace_by_component[match.group(1)] = cells

    component_source = COMPONENTS.relative_to(ROOT).as_posix()
    trace_source = TRACEABILITY.relative_to(ROOT).as_posix()
    for cells in rows(COMPONENTS):
        if len(cells) < 9 or not COMPONENT_ID.fullmatch(cells[0]):
            continue
        component_id, name, component_class, technical_owner, approver, status, document_version, goei_version, path = cells[:9]
        trace = trace_by_component.get(component_id, [])
        node(
            component_id,
            "Component",
            name=name,
            componentClass=component_class,
            technicalOwner=technical_owner,
            approver=approver,
            status=status,
            documentVersion=document_version,
            goeiVersion=goei_version,
            canonicalPath=path,
            decisionOrigin=trace[1] if len(trace) >= 2 else "",
            decisionStatus=trace[2] if len(trace) >= 3 else "",
            evidence=trace[3] if len(trace) >= 4 else "",
            dependents=trace[6] if len(trace) >= 7 else "",
        )
        document_id = f"DOC::{path}"
        node(document_id, "Document", path=path)
        edge(f"E-CONTAINS::{component_id}", "CONTAINS", document_id, component_id, component_source)
        if trace:
            trace_document_id = f"DOC::{trace_source}"
            node(trace_document_id, "Document", path=trace_source)
            edge(f"E-TRACE::{component_id}", "TRACED_IN", component_id, trace_document_id, trace_source)
            for decision_id in sorted(set(DECISION_ID.findall(trace[1]))):
                node(decision_id, "Decision", registryPath=DECISIONS.relative_to(ROOT).as_posix())
                edge(f"E-ORIGIN::{decision_id}::{component_id}", "ORIGINATES", decision_id, component_id, trace_source)
        if goei_version not in {"", "No asignada", "PENDIENTE"}:
            version_id = f"VER::{goei_version}"
            node(version_id, "Version", label=goei_version)
            edge(f"E-VERSION::{component_id}::{goei_version}", "INCORPORATED_IN", component_id, version_id, component_source)

    for match in re.finditer(rf"^\*\*Decisión:\*\*\s+({DECISION_TOKEN})\s+—\s+(.+)$", DECISIONS.read_text(encoding="utf-8"), re.MULTILINE):
        current = nodes.get(match.group(1), {"id": match.group(1), "type": "Decision", "properties": {}})
        current["properties"].update({"title": match.group(2), "registryPath": DECISIONS.relative_to(ROOT).as_posix()})
        nodes[match.group(1)] = current

    config = json.loads(CONFIG.read_text(encoding="utf-8"))
    for registry_relative in config["issueRegistries"]:
        registry = ROOT / registry_relative
        registry_document_id = f"DOC::{registry_relative}"
        node(registry_document_id, "Document", path=registry_relative)
        for cells in rows(registry):
            if not cells or not ISSUE_ID.fullmatch(cells[0]):
                continue
            issue_id = cells[0]
            node(issue_id, "Issue", registryPath=registry_relative, fields=cells[1:])
            edge(f"E-ISSUE::{issue_id}", "REGISTERED_IN", issue_id, registry_document_id, registry_relative)

    return {
        "schemaVersion": "1.0",
        "graphId": "GOEI-KG-REGISTRY-0001",
        "projection": "registry-only",
        "authorityNotice": "No scientific inference; every edge is sourced from a registry.",
        "nodes": sorted(nodes.values(), key=lambda item: item["id"]),
        "edges": sorted(edges.values(), key=lambda item: item["id"]),
    }


def render() -> str:
    return json.dumps(build(), ensure_ascii=False, indent=2, sort_keys=True) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    expected = render()
    if args.check:
        if not OUTPUT.is_file() or OUTPUT.read_text(encoding="utf-8") != expected:
            print("RESULT: FAIL — knowledge_graph.registry.json desactualizado")
            return 1
        graph = json.loads(expected)
        print(f"GOEI registry graph: {len(graph['nodes'])} nodes, {len(graph['edges'])} edges")
        print("RESULT: PASS")
        return 0
    OUTPUT.write_text(expected, encoding="utf-8")
    graph = json.loads(expected)
    print(f"WROTE {OUTPUT.relative_to(ROOT)}: {len(graph['nodes'])} nodes, {len(graph['edges'])} edges")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
