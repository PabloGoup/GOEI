#!/usr/bin/env python3
"""Valida estructura, dependencias y evidencia del roadmap técnico GOEI."""

from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
ROADMAP = ROOT / "00_Gobernanza/coordinacion/technical_roadmap.json"
STATUSES = {"pending", "in_progress", "awaiting_approval", "blocked", "complete"}


def validate(path: Path = ROADMAP, root: Path = ROOT) -> list[str]:
    data = json.loads(path.read_text(encoding="utf-8"))
    errors: list[str] = []
    packages = data.get("workPackages", [])
    ids = [item.get("id") for item in packages]
    if len(ids) != len(set(ids)):
        errors.append("IDs de paquetes duplicados")
    known = set(ids)
    by_id = {item.get("id"): item for item in packages}

    for item in packages:
        package_id = item.get("id", "UNKNOWN")
        status = item.get("status")
        if status not in STATUSES:
            errors.append(f"{package_id}: estado inválido")
        dependencies = item.get("dependencies")
        evidence = item.get("evidence")
        blockers = item.get("blockers")
        if not isinstance(dependencies, list) or not isinstance(evidence, list) or not isinstance(blockers, list):
            errors.append(f"{package_id}: dependencies/evidence/blockers deben ser listas")
            continue
        unknown = sorted(set(dependencies) - known)
        if unknown:
            errors.append(f"{package_id}: dependencias desconocidas {unknown}")
        if package_id in dependencies:
            errors.append(f"{package_id}: dependencia circular directa")
        missing = [relative for relative in evidence if not (root / relative).is_file()]
        if missing:
            errors.append(f"{package_id}: evidencia inexistente {missing}")
        if status == "complete":
            if not evidence:
                errors.append(f"{package_id}: completado sin evidencia")
            if blockers:
                errors.append(f"{package_id}: completado con blockers")
            incomplete_dependencies = [dep for dep in dependencies if by_id[dep].get("status") != "complete"]
            if incomplete_dependencies:
                errors.append(f"{package_id}: completado con dependencias incompletas {incomplete_dependencies}")
        if status in {"blocked", "awaiting_approval"} and not blockers:
            errors.append(f"{package_id}: estado {status} sin blockers")

    visiting: set[str] = set()
    visited: set[str] = set()

    def visit(node: str) -> None:
        if node in visiting:
            errors.append(f"Ciclo de dependencias detectado en {node}")
            return
        if node in visited:
            return
        visiting.add(node)
        for dependency in by_id[node].get("dependencies", []):
            if dependency in by_id:
                visit(dependency)
        visiting.remove(node)
        visited.add(node)

    for package_id in known:
        visit(package_id)

    for target, package_id in data.get("targets", {}).items():
        if package_id not in known:
            errors.append(f"Target {target}: paquete desconocido {package_id}")
    return errors


def main() -> int:
    errors = validate()
    print(f"GOEI technical roadmap checks: {15 if not errors else 15}")
    for error in errors:
        print(f"ERROR: {error}")
    if errors:
        print(f"RESULT: FAIL ({len(errors)} errors)")
        return 1
    print("RESULT: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
