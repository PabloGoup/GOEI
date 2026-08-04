#!/usr/bin/env python3
"""Evalúa la cobertura estructural de GOEI-DIR-0002 sin validar ciencia."""

from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
MATRIX = ROOT / "12_Tesis/ensamblaje/Matriz_de_cumplimiento_plan_maestro.md"
ROW = re.compile(r"^\|\s*(THS-(I|II|III|IV|ANX|VIS|PUB|PRD)-\d{2})\s*\|")
ALLOWED = {
    "No iniciado",
    "Parcial estructural",
    "Parcial técnico",
    "Parcial",
    "Candidato técnico",
    "Bloqueado",
    "Listo para revisión",
    "Aprobado",
    "Publicado",
}
SATISFIED = {"Aprobado", "Publicado"}


def parse(path: Path = MATRIX) -> list[dict[str, str]]:
    requirements = []
    for line in path.read_text(encoding="utf-8").splitlines():
        match = ROW.match(line)
        if not match:
            continue
        cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
        statuses = [cell for cell in cells if cell in ALLOWED]
        if len(statuses) != 1:
            raise ValueError(f"{match.group(1)} debe contener exactamente un estado permitido; encontrados: {statuses}")
        requirements.append({"id": match.group(1), "group": match.group(2), "status": statuses[0]})
    return requirements


def assess(path: Path = MATRIX) -> dict:
    requirements = parse(path)
    by_status = Counter(item["status"] for item in requirements)
    by_group: dict[str, Counter] = defaultdict(Counter)
    for item in requirements:
        by_group[item["group"]][item["status"]] += 1
    satisfied = sum(item["status"] in SATISFIED for item in requirements)
    return {
        "schemaVersion": "1.0",
        "requirementBaseline": "GOEI-THS-REQ-0001",
        "total": len(requirements),
        "satisfied": satisfied,
        "pending": len(requirements) - satisfied,
        "complete": bool(requirements) and satisfied == len(requirements),
        "byStatus": dict(sorted(by_status.items())),
        "byGroup": {group: dict(sorted(counts.items())) for group, counts in sorted(by_group.items())},
        "notice": "Cobertura documental solamente; no valida contenido científico ni calidad académica.",
    }


def main() -> int:
    result = assess()
    print(json.dumps(result, ensure_ascii=False, indent=2, sort_keys=True))
    return 0 if result["complete"] else 2


if __name__ == "__main__":
    raise SystemExit(main())
