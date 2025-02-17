import unittest

from flood_fill import flood_fill

class TestFloodFill(unittest.TestCase):
    def test_fill_changes_correct_pixels(self):
        """
        fill only one cell
        """
        image = [[1, 1, 0], [1, 0, 0], [1, 1, 1]]
        row, col, color = 1, 1, 2
        expected = [[1, 1, 2], [1, 2, 2], [1, 1, 1]]
        self.assertEqual(flood_fill(image, row, col, color), expected)

    def test_fill_changes_correct_pixels_without_other(self):
        """
        fill four cells
        """
        image = [[1, 0, 0], [1, 0, 0], [1, 1, 1]]
        row, col, color = 1, 1, 2
        expected = [[1, 2, 2], [1, 2, 2], [1, 1, 1]]
        self.assertEqual(flood_fill(image, row, col, color), expected)

    def test_fill_when_starting_pixel_has_same_color(self):
        """
        fill if pixel has same color
        """
        image = [[0, 0, 0], [0, 1, 1]]
        row, col, color = 1, 1, 2
        expected = [[0, 0, 0], [0, 2, 2]]
        self.assertEqual(flood_fill(image, row, col, color), expected)

    def test_fill_does_not_change_if_already_same_color(self):
        """
        don't fill if pixel has same color
        """
        image = [[1, 1], [1, 1]]
        row, col, color = 1, 1, 1  # Already 1
        expected = [[1, 1], [1, 1]]  # Should remain unchanged
        self.assertEqual(flood_fill(image, row, col, color), expected)


if __name__ == '__main__':
    unittest.main()
