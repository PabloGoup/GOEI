from __future__ import annotations

import tempfile
import unittest
from pathlib import Path

from assess_thesis_coverage import assess, parse


class ThesisCoverageTest(unittest.TestCase):
    def matrix(self, text: str) -> Path:
        temp = tempfile.NamedTemporaryFile(mode="w", suffix=".md", delete=False, encoding="utf-8")
        temp.write(text)
        temp.close()
        self.addCleanup(Path(temp.name).unlink)
        return Path(temp.name)

    def test_approved_and_published_are_satisfied(self) -> None:
        path = self.matrix("| THS-I-01 | A | Aprobado | gate |\n| THS-II-01 | B | Publicado | gate |\n")
        result = assess(path)
        self.assertTrue(result["complete"])
        self.assertEqual(result["satisfied"], 2)

    def test_pending_requirement_blocks_completion(self) -> None:
        path = self.matrix("| THS-I-01 | A | Parcial | gate |\n")
        result = assess(path)
        self.assertFalse(result["complete"])
        self.assertEqual(result["pending"], 1)

    def test_unknown_status_is_rejected(self) -> None:
        path = self.matrix("| THS-I-01 | A | Inventado | gate |\n")
        with self.assertRaises(ValueError):
            parse(path)


if __name__ == "__main__":
    unittest.main()
