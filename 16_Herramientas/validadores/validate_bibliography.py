#!/usr/bin/env python3
"""Valida metadatos y trazabilidad bibliográfica sin juzgar evidencia."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
CATALOG = ROOT / "02_Bibliografia/catalogo_fuentes.json"
DECISIONS = ROOT / "00_Gobernanza/Registro_de_decisiones.md"
SOURCE_ID = re.compile(r"^GOEI-SRC-\d{4}$")
SHA256 = re.compile(r"^[0-9a-f]{64}$")
VERIFICATION = {"unverified", "metadata_verified", "superseded"}
SCIENTIFIC = {"not_reviewed", "under_review", "admitted", "rejected", "limited", "superseded"}
ACCESS = {"external_only", "open_copy", "licensed_copy", "restricted_copy", "metadata_only"}


def inside_existing_file(root: Path, relative: object) -> bool:
    if not isinstance(relative, str) or not relative:
        return False
    candidate = (root / relative).resolve()
    try:
        candidate.relative_to(root.resolve())
    except ValueError:
        return False
    return candidate.is_file()


def validate(path: Path = CATALOG, root: Path = ROOT) -> tuple[list[str], int]:
    data = json.loads(path.read_text(encoding="utf-8"))
    errors: list[str] = []
    if data.get("schemaVersion") != "1.0":
        errors.append("schemaVersion debe ser 1.0")
    sources = data.get("sources")
    if not isinstance(sources, list):
        return ["sources debe ser una lista"], 0
    ids = [item.get("id") for item in sources if isinstance(item, dict)]
    if len(ids) != len(set(ids)):
        errors.append("IDs bibliográficos duplicados")
    decision_text = (root / DECISIONS.relative_to(ROOT)).read_text(encoding="utf-8") if root == ROOT else ""
    external_identifiers: dict[tuple[str, str], str] = {}

    for index, source in enumerate(sources):
        label = f"sources[{index}]"
        if not isinstance(source, dict):
            errors.append(f"{label} debe ser objeto")
            continue
        source_id = source.get("id")
        if not SOURCE_ID.fullmatch(str(source_id or "")):
            errors.append(f"{label}.id inválido")
        verification = source.get("verificationStatus")
        scientific = source.get("scientificReviewStatus")
        if verification not in VERIFICATION:
            errors.append(f"{label}.verificationStatus inválido")
        if scientific not in SCIENTIFIC:
            errors.append(f"{label}.scientificReviewStatus inválido")
        custody = source.get("custody")
        if not isinstance(custody, dict) or custody.get("accessStatus") not in ACCESS:
            errors.append(f"{label}.custody.accessStatus inválido")
            custody = {}
        local_path = custody.get("localPath")
        if local_path is not None and not inside_existing_file(root, local_path):
            errors.append(f"{label}.custody.localPath no existe o escapa del repositorio")
        checksum = custody.get("sha256")
        if checksum is not None and not SHA256.fullmatch(str(checksum)):
            errors.append(f"{label}.custody.sha256 inválido")
        if verification == "metadata_verified":
            for field in ("title", "creators", "identifiers", "language"):
                if not source.get(field):
                    errors.append(f"{label}.{field} obligatorio al verificar metadatos")
        for identifier in source.get("identifiers", []):
            if not isinstance(identifier, dict) or not identifier.get("type") or not identifier.get("value"):
                errors.append(f"{label}.identifiers contiene entrada inválida")
                continue
            key = (str(identifier["type"]).lower(), str(identifier["value"]).lower())
            if key in external_identifiers and external_identifiers[key] != source_id:
                errors.append(f"Identificador externo duplicado entre {external_identifiers[key]} y {source_id}")
            external_identifiers[key] = str(source_id)
        for decision_id in source.get("citedByDecisions", []):
            if decision_text and f"**Decisión:** {decision_id} " not in decision_text:
                errors.append(f"{label}: decisión inexistente {decision_id}")
        if scientific in {"admitted", "rejected", "limited"} and not source.get("scientificReviewRecord"):
            errors.append(f"{label}.scientificReviewRecord obligatorio para estado {scientific}")
    return errors, len(sources)


def main() -> int:
    errors, count = validate()
    print(f"GOEI bibliography records: {count}")
    for error in errors:
        print(f"ERROR: {error}")
    if errors:
        print(f"RESULT: FAIL ({len(errors)} errors)")
        return 1
    print("RESULT: PASS (structural; scientific review not evaluated)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
