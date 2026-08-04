from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from build_manifest import build
from compare_manifests import load
from evaluate_release_gates import evaluate


class ReleaseToolsTest(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        (self.root / "component.md").write_text("component", encoding="utf-8")
        (self.root / "decision.md").write_text("approved", encoding="utf-8")
        (self.root / "trace.md").write_text("trace", encoding="utf-8")
        (self.root / "validation.md").write_text("pass", encoding="utf-8")
        (self.root / "comparison.json").write_text("{}", encoding="utf-8")
        (self.root / "impact.md").write_text("compatible", encoding="utf-8")
        (self.root / "approval.md").write_text("approved", encoding="utf-8")
        governance = self.root / "00_Gobernanza"
        governance.mkdir()
        (governance / "Registro_de_componentes.md").write_text("| GOEI-CMP-001 | Fixture |\n", encoding="utf-8")
        (governance / "Registro_de_decisiones.md").write_text("**Decisión:** D-001 — Fixture\n", encoding="utf-8")
        manifest = build(self.root, self.root, None)
        (self.root / "manifest.json").write_text(json.dumps(manifest), encoding="utf-8")

    def tearDown(self) -> None:
        self.temp.cleanup()

    def dossier(self) -> dict:
        return {
            "schemaVersion": "1.0",
            "releaseId": "GOEI-RC-v1.0.0-rc.1",
            "version": "1.0.0",
            "status": "candidate",
            "scope": "Test fixture",
            "components": [{"id": "GOEI-CMP-001", "version": "1.0.0", "path": "component.md", "traceabilityPath": "trace.md"}],
            "decisions": [{"id": "D-001", "status": "approved", "recordPath": "decision.md"}],
            "traceabilityArtifacts": ["trace.md"],
            "technicalValidation": {"passed": True, "command": "validator", "recordPath": "validation.md"},
            "manifestPath": "manifest.json",
            "baselineComparison": {"recordPath": "comparison.json", "impactAnalysisPath": "impact.md"},
            "openIssues": [],
            "approval": {"approved": True, "authority": "Test Authority", "date": "2026-08-04", "recordPath": "approval.md"},
        }

    def test_complete_fixture_passes_all_gates(self) -> None:
        result = evaluate(self.dossier(), self.root)
        self.assertTrue(result["eligibleForPromotion"])
        self.assertTrue(all(value["passed"] for value in result["gates"].values()))

    def test_missing_approval_blocks_only_g5(self) -> None:
        dossier = self.dossier()
        dossier["approval"] = {"approved": False, "authority": "PENDIENTE", "date": None, "recordPath": None}
        result = evaluate(dossier, self.root)
        self.assertFalse(result["eligibleForPromotion"])
        self.assertFalse(result["gates"]["G5"]["passed"])
        self.assertTrue(all(result["gates"][key]["passed"] for key in ("G0", "G1", "G2", "G3", "G4")))

    def test_unapproved_decision_blocks_g1(self) -> None:
        dossier = self.dossier()
        dossier["decisions"][0]["status"] = "proposed"
        result = evaluate(dossier, self.root)
        self.assertFalse(result["gates"]["G1"]["passed"])

    def test_unregistered_component_blocks_g0(self) -> None:
        dossier = self.dossier()
        dossier["components"][0]["id"] = "GOEI-CMP-999"
        result = evaluate(dossier, self.root)
        self.assertFalse(result["gates"]["G0"]["passed"])

    def test_unregistered_decision_blocks_g1(self) -> None:
        dossier = self.dossier()
        dossier["decisions"][0]["id"] = "D-999"
        result = evaluate(dossier, self.root)
        self.assertFalse(result["gates"]["G1"]["passed"])

    def test_path_escape_is_rejected(self) -> None:
        dossier = self.dossier()
        dossier["components"][0]["path"] = "../outside.md"
        result = evaluate(dossier, self.root)
        self.assertFalse(result["gates"]["G0"]["passed"])

    def test_manifest_loader_reconstructs_mapping(self) -> None:
        mapping = load(self.root / "manifest.json")
        self.assertIn("component.md", mapping)


if __name__ == "__main__":
    unittest.main()
