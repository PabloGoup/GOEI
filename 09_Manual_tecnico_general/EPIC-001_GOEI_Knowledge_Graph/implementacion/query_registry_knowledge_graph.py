#!/usr/bin/env python3
"""Consulta la proyección registral GOEI sin inferencia científica."""

from __future__ import annotations

import argparse
import json
from collections import deque
from pathlib import Path
from typing import Any


GRAPH = Path(__file__).with_name("knowledge_graph.registry.json")


def load(path: Path = GRAPH) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def indexes(graph: dict[str, Any]) -> tuple[dict[str, dict], list[dict]]:
    return {item["id"]: item for item in graph["nodes"]}, graph["edges"]


def neighbors(graph: dict[str, Any], node_id: str, direction: str = "both", relation: str | None = None) -> dict[str, Any]:
    nodes, edges = indexes(graph)
    if node_id not in nodes:
        raise KeyError(node_id)
    selected = []
    for edge in edges:
        if relation and edge["type"] != relation:
            continue
        if direction in {"out", "both"} and edge["source"] == node_id:
            selected.append({"direction": "out", "edge": edge, "node": nodes[edge["target"]]})
        if direction in {"in", "both"} and edge["target"] == node_id:
            selected.append({"direction": "in", "edge": edge, "node": nodes[edge["source"]]})
    return {"query": node_id, "results": selected, "inference": False}


def shortest_path(graph: dict[str, Any], source: str, target: str, bidirectional: bool = False) -> dict[str, Any]:
    nodes, edges = indexes(graph)
    if source not in nodes or target not in nodes:
        missing = [item for item in (source, target) if item not in nodes]
        raise KeyError(", ".join(missing))
    adjacency: dict[str, list[tuple[str, dict, str]]] = {node_id: [] for node_id in nodes}
    for edge in edges:
        adjacency[edge["source"]].append((edge["target"], edge, "out"))
        if bidirectional:
            adjacency[edge["target"]].append((edge["source"], edge, "in"))
    queue = deque([(source, [])])
    visited = {source}
    while queue:
        current, path = queue.popleft()
        if current == target:
            return {"source": source, "target": target, "found": True, "steps": path, "inference": False}
        for next_node, edge, direction in adjacency[current]:
            if next_node in visited:
                continue
            visited.add(next_node)
            queue.append((next_node, path + [{"direction": direction, "edge": edge, "node": nodes[next_node]}]))
    return {"source": source, "target": target, "found": False, "steps": [], "inference": False}


def impact(graph: dict[str, Any], node_id: str) -> dict[str, Any]:
    nodes, edges = indexes(graph)
    if node_id not in nodes:
        raise KeyError(node_id)
    root = nodes[node_id]
    component_ids: set[str] = set()
    if root["type"] == "Component":
        component_ids.add(node_id)
    elif root["type"] == "Decision":
        component_ids.update(edge["target"] for edge in edges if edge["source"] == node_id and edge["type"] == "ORIGINATES")

    components = []
    documents: dict[str, dict] = {}
    versions: dict[str, dict] = {}
    for component_id in sorted(component_ids):
        component = nodes[component_id]
        components.append({
            "component": component,
            "registeredDependentsLiteral": component["properties"].get("dependents", ""),
            "evidenceLiteral": component["properties"].get("evidence", ""),
        })
        for edge in edges:
            if edge["type"] == "CONTAINS" and edge["target"] == component_id:
                documents[edge["source"]] = nodes[edge["source"]]
            if edge["type"] == "INCORPORATED_IN" and edge["source"] == component_id:
                versions[edge["target"]] = nodes[edge["target"]]
    return {
        "query": node_id,
        "queryType": root["type"],
        "affectedComponents": components,
        "canonicalDocuments": [documents[key] for key in sorted(documents)],
        "versions": [versions[key] for key in sorted(versions)],
        "notice": "Impacto registral directo. Los literales no se convierten en relaciones ni prueban impacto transitivo.",
        "inference": False,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--graph", type=Path, default=GRAPH)
    commands = parser.add_subparsers(dest="command", required=True)
    node_command = commands.add_parser("node")
    node_command.add_argument("id")
    neighbor_command = commands.add_parser("neighbors")
    neighbor_command.add_argument("id")
    neighbor_command.add_argument("--direction", choices=("in", "out", "both"), default="both")
    neighbor_command.add_argument("--relation")
    path_command = commands.add_parser("path")
    path_command.add_argument("source")
    path_command.add_argument("target")
    path_command.add_argument("--bidirectional", action="store_true")
    impact_command = commands.add_parser("impact")
    impact_command.add_argument("id")
    args = parser.parse_args()

    graph = load(args.graph)
    nodes, _ = indexes(graph)
    try:
        if args.command == "node":
            result = nodes[args.id]
        elif args.command == "neighbors":
            result = neighbors(graph, args.id, args.direction, args.relation)
        elif args.command == "path":
            result = shortest_path(graph, args.source, args.target, args.bidirectional)
        else:
            result = impact(graph, args.id)
    except KeyError as error:
        parser.error(f"Nodo inexistente: {error.args[0]}")
    print(json.dumps(result, ensure_ascii=False, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
