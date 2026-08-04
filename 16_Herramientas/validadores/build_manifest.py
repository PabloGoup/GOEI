#!/usr/bin/env python3
"""Genera por stdout un manifiesto reproducible del repositorio GOEI."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path


EXCLUDED_PARTS = {".git", "__pycache__", ".DS_Store"}
EXCLUDED_SUFFIXES = {".pyc", ".swp", ".tmp"}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def included(path: Path, root: Path, output: Path | None) -> bool:
    relative = path.relative_to(root)
    if output is not None and path.resolve() == output.resolve():
        return False
    if any(part in EXCLUDED_PARTS for part in relative.parts):
        return False
    return path.suffix not in EXCLUDED_SUFFIXES


def build(root: Path, scope: Path, output: Path | None) -> dict:
    files = []
    for path in sorted(scope.rglob("*")):
        if path.is_file() and included(path, root, output):
            relative = path.relative_to(root).as_posix()
            files.append({"path": relative, "size": path.stat().st_size, "sha256": sha256(path)})
    return {
        "schemaVersion": "1.0",
        "algorithm": "sha256",
        "root": ".",
        "scope": scope.relative_to(root).as_posix() or ".",
        "fileCount": len(files),
        "files": files,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default=".", help="Raíz del repositorio")
    parser.add_argument("--scope", default=".", help="Subruta incluida")
    parser.add_argument("--output", help="Archivo de salida; por defecto stdout")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    scope = (root / args.scope).resolve()
    output = Path(args.output).resolve() if args.output else None
    if not scope.is_relative_to(root) or not scope.exists():
        parser.error("--scope debe existir dentro de --root")

    payload = build(root, scope, output)
    rendered = json.dumps(payload, ensure_ascii=False, indent=2, sort_keys=True) + "\n"
    if output:
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(rendered, encoding="utf-8")
    else:
        print(rendered, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
