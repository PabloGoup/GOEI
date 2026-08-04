#!/usr/bin/env python3
"""Compara dos manifiestos GOEI sin interpretar el significado científico."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def load(path: Path) -> dict[str, dict]:
    payload = json.loads(path.read_text(encoding="utf-8"))
    if payload.get("schemaVersion") != "1.0" or not isinstance(payload.get("files"), list):
        raise ValueError(f"Manifiesto no compatible: {path}")
    return {item["path"]: item for item in payload["files"]}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("baseline")
    parser.add_argument("candidate")
    args = parser.parse_args()

    baseline = load(Path(args.baseline))
    candidate = load(Path(args.candidate))
    old, new = set(baseline), set(candidate)
    result = {
        "added": sorted(new - old),
        "removed": sorted(old - new),
        "modified": sorted(path for path in old & new if baseline[path]["sha256"] != candidate[path]["sha256"]),
        "unchangedCount": sum(baseline[path]["sha256"] == candidate[path]["sha256"] for path in old & new),
    }
    result["hasChanges"] = any(result[key] for key in ("added", "removed", "modified"))
    print(json.dumps(result, ensure_ascii=False, indent=2, sort_keys=True))
    return 1 if result["hasChanges"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
