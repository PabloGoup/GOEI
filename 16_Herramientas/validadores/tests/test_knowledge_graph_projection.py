from __future__ import annotations

import importlib.util
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
BUILDER = ROOT / "09_Manual_tecnico_general/EPIC-001_GOEI_Knowledge_Graph/implementacion/build_registry_knowledge_graph.py"
SPEC = importlib.util.spec_from_file_location("goei_kg_builder", BUILDER)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(MODULE)


class KnowledgeGraphProjectionTest(unittest.TestCase):
    def setUp(self) -> None:
        self.graph = MODULE.build()

    def test_node_and_edge_ids_are_unique(self) -> None:
        node_ids = [item["id"] for item in self.graph["nodes"]]
        edge_ids = [item["id"] for item in self.graph["edges"]]
        self.assertEqual(len(node_ids), len(set(node_ids)))
        self.assertEqual(len(edge_ids), len(set(edge_ids)))

    def test_every_edge_has_existing_endpoints_and_source(self) -> None:
        node_ids = {item["id"] for item in self.graph["nodes"]}
        for edge in self.graph["edges"]:
            self.assertIn(edge["source"], node_ids)
            self.assertIn(edge["target"], node_ids)
            self.assertTrue((ROOT / edge["sourceDocument"]).is_file())

    def test_every_registered_component_is_projected(self) -> None:
        projected = {item["id"] for item in self.graph["nodes"] if item["type"] == "Component"}
        registry = (ROOT / "00_Gobernanza/Registro_de_componentes.md").read_text(encoding="utf-8")
        registered = {
            cells[0]
            for line in registry.splitlines()
            if line.startswith("|")
            for cells in [[cell.strip() for cell in line.strip().strip("|").split("|")]]
            if cells and MODULE.COMPONENT_ID.fullmatch(cells[0])
        }
        self.assertEqual(projected, registered)


if __name__ == "__main__":
    unittest.main()
