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


def flood_fill(image, row, col, color):
    """
    :type image: List[List[int]]
    :type sr: int
    :type sc: int
    :type color: int
    :rtype: List[List[int]]
    """
