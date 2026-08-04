from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from validate_bibliography import validate


class BibliographyTest(unittest.TestCase):
    def catalog(self, sources: list[dict]) -> tuple[Path, Path]:
        directory = Path(tempfile.mkdtemp())
        self.addCleanup(lambda: __import__("shutil").rmtree(directory))
        path = directory / "catalog.json"
        path.write_text(json.dumps({"schemaVersion": "1.0", "sources": sources}), encoding="utf-8")
        return path, directory

    def source(self) -> dict:
        return {
            "id": "GOEI-SRC-0001",
            "sourceType": "article",
            "title": "Fixture",
            "creators": ["Author"],
            "identifiers": [{"type": "doi", "value": "10.fixture/1"}],
            "language": "en",
            "verificationStatus": "metadata_verified",
            "scientificReviewStatus": "not_reviewed",
            "custody": {"accessStatus": "external_only", "localPath": None, "sha256": None},
            "citedByDecisions": [],
            "claims": [],
            "annotations": []
        }

    def test_verified_metadata_fixture_passes(self) -> None:
        path, root = self.catalog([self.source()])
        errors, count = validate(path, root)
        self.assertEqual(errors, [])
        self.assertEqual(count, 1)

    def test_duplicate_external_identifier_fails(self) -> None:
        first = self.source()
        second = self.source() | {"id": "GOEI-SRC-0002"}
        path, root = self.catalog([first, second])
        errors, _ = validate(path, root)
        self.assertTrue(any("Identificador externo duplicado" in error for error in errors))

    def test_admitted_source_requires_review_record(self) -> None:
        source = self.source() | {"scientificReviewStatus": "admitted"}
        path, root = self.catalog([source])
        errors, _ = validate(path, root)
        self.assertTrue(any("scientificReviewRecord" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
