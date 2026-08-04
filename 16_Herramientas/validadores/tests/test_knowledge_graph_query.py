from __future__ import annotations

import importlib.util
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
QUERY = ROOT / "09_Manual_tecnico_general/EPIC-001_GOEI_Knowledge_Graph/implementacion/query_registry_knowledge_graph.py"
SPEC = importlib.util.spec_from_file_location("goei_kg_query", QUERY)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(MODULE)


class KnowledgeGraphQueryTest(unittest.TestCase):
    def graph(self) -> dict:
        return {
            "nodes": [
                {"id": "D-001", "type": "Decision", "properties": {}},
                {"id": "GOEI-CMP-001", "type": "Component", "properties": {"dependents": "manual", "evidence": "record"}},
                {"id": "DOC::a.md", "type": "Document", "properties": {"path": "a.md"}},
                {"id": "VER::v0.1", "type": "Version", "properties": {"label": "v0.1"}},
            ],
            "edges": [
                {"id": "e1", "type": "ORIGINATES", "source": "D-001", "target": "GOEI-CMP-001", "sourceDocument": "trace.md"},
                {"id": "e2", "type": "CONTAINS", "source": "DOC::a.md", "target": "GOEI-CMP-001", "sourceDocument": "registry.md"},
                {"id": "e3", "type": "INCORPORATED_IN", "source": "GOEI-CMP-001", "target": "VER::v0.1", "sourceDocument": "registry.md"},
            ],
        }

    def test_neighbors_respect_direction_and_relation(self) -> None:
        result = MODULE.neighbors(self.graph(), "D-001", "out", "ORIGINATES")
        self.assertEqual([item["node"]["id"] for item in result["results"]], ["GOEI-CMP-001"])

    def test_shortest_path_is_directed_by_default(self) -> None:
        forward = MODULE.shortest_path(self.graph(), "D-001", "VER::v0.1")
        reverse = MODULE.shortest_path(self.graph(), "VER::v0.1", "D-001")
        self.assertTrue(forward["found"])
        self.assertFalse(reverse["found"])

    def test_impact_preserves_literals_without_inference(self) -> None:
        result = MODULE.impact(self.graph(), "D-001")
        self.assertFalse(result["inference"])
        self.assertEqual(result["affectedComponents"][0]["registeredDependentsLiteral"], "manual")
        self.assertEqual(result["canonicalDocuments"][0]["id"], "DOC::a.md")


if __name__ == "__main__":
    unittest.main()
