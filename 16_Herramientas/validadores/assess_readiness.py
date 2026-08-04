#!/usr/bin/env python3
"""Muestra preparación verificable de los entregables finales GOEI."""

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
STATE = ROOT / "00_Gobernanza/coordinacion/program_state.json"


def main() -> int:
    state = json.loads(STATE.read_text(encoding="utf-8"))
    print("GOEI PROGRAM READINESS")
    print(f"Updated: {state['updatedAt']}")
    for phase in state["phases"]:
        print(f"{phase['id']}: {phase['status']} — {phase['name']}")
        for blocker in phase.get("blockers", []):
            print(f"  BLOCKER: {blocker}")
    print("TARGETS")
    for target, status in state["targetDeliverables"].items():
        print(f"  {target}: {status}")
    return 0 if all(value == "ready" for value in state["targetDeliverables"].values()) else 2


if __name__ == "__main__":
    raise SystemExit(main())
