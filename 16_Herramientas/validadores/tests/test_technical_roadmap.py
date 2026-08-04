from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from validate_technical_roadmap import validate


class TechnicalRoadmapTest(unittest.TestCase):
    def fixture(self, packages: list[dict]) -> tuple[Path, Path]:
        directory = Path(tempfile.mkdtemp())
        self.addCleanup(lambda: __import__("shutil").rmtree(directory))
        payload = {"schemaVersion": "1.0", "workPackages": packages, "targets": {}}
        path = directory / "roadmap.json"
        path.write_text(json.dumps(payload), encoding="utf-8")
        return path, directory

    def test_complete_package_requires_existing_evidence(self) -> None:
        path, root = self.fixture([{"id": "WP-01", "status": "complete", "dependencies": [], "evidence": ["missing.md"], "blockers": []}])
        errors = validate(path, root)
        self.assertTrue(any("evidencia inexistente" in error for error in errors))

    def test_blocked_package_requires_blocker(self) -> None:
        path, root = self.fixture([{"id": "WP-01", "status": "blocked", "dependencies": [], "evidence": [], "blockers": []}])
        errors = validate(path, root)
        self.assertTrue(any("sin blockers" in error for error in errors))

    def test_dependency_cycle_is_rejected(self) -> None:
        path, root = self.fixture([
            {"id": "WP-01", "status": "in_progress", "dependencies": ["WP-02"], "evidence": [], "blockers": []},
            {"id": "WP-02", "status": "in_progress", "dependencies": ["WP-01"], "evidence": [], "blockers": []},
        ])
        errors = validate(path, root)
        self.assertTrue(any("Ciclo" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
