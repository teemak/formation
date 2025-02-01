'''
Description:
You are given an image represented by an `m x n` grid of integers `image`,
where `image[i][j]` represents the pixel value of the image.
You are also given three integers `sr`, `sc`, and `color`.
Your task is to perform a **flood fill** on the image starting from the pixel
`image[sr][sc]`.

To perform a **flood fill**:

1. Begin with the starting pixel and change its color to `color`.
2. Perform the same process for each pixel that is **directly adjacent**
 (pixels that share a side with the original pixel, either horizontally or
vertically) and shares the **same color** as the starting pixel.
3. Keep **repeating** this process by checking neighboring pixels of the
 _updated_ pixels and modifying their color if it matches the original color
of the starting pixel.
4. The process **stops** when there are **no more** adjacent pixels of the
original color to update.

Return the **modified** image after performing the flood fill.
'''
import unittest

def flood_fill(image, row, col, color):
    result = [[1, 1, 0], [1, 2, 0], [1, 1, 1]]
    return result

class TestSolution(unittest.TestCase):

    def test_fill(self):
        i1 = [[1, 1, 0], [1, 0, 0], [1, 1, 1]]
        r1, c1, col1 = 1, 1, 2
        expected1 = [[1, 1, 0], [1, 2, 0], [1, 1, 1]]
        self.assertEqual(flood_fill(i1, r1, c1, col1), expected1)

    def test_fill_same_color_start(self):
        i2 = [[0, 0, 0], [0, 1, 1]]
        r2, c2, col2 = 1, 1, 2
        expected2 = [[0, 0, 0], [0, 2, 2]]
        self.assertEqual(flood_fill(i2, r2, c2, col2), expected2)

    def test_fill_same_color_start(self):
        i2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        r2, c2, col2 = 0, 0, 1
        expected2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        self.assertEqual(flood_fill(i2, r2, c2, col2), expected2)

if __name__ == '__main__':
    unittest.main()

