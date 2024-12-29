def word_search(grid, word):
    ROWS, COLS = len(grid), len(grid[0])

    def dfs(row, col, idx):
        if idx == len(word):
            return True
        if (row < 0 or col < 0 or row >= ROWS or col >= COLS or
                word[idx] != grid[row][col]):
            return False

        grid[row][col] = '#'
        result = (
          dfs(row + 1, col, idx + 1) or
          dfs(row - 1, col, idx + 1) or
          dfs(row, col + 1, idx + 1) or
          dfs(row, col - 1, idx + 1))
        grid[row][col] = word[idx]
        return result

    for row in range(ROWS):
        for col in range(COLS):
            if dfs(row, col, 0):
                return True

    return False


input1 = [['E', 'D', 'X', 'I', 'W'],
          ['P', 'U', 'F', 'M', 'Q'],
          ['I', 'C', 'Q', 'R', 'F'],
          ['M', 'A', 'L', 'C', 'A'],
          ['J', 'T', 'I', 'V', 'E']]
target1 = "EDUCATIVE"

input2 = [['E', 'D', 'X', 'I', 'W'],
          ['P', 'A', 'F', 'M', 'Q'],
          ['I', 'C', 'A', 'S', 'F'],
          ['M', 'A', 'L', 'C', 'A'],
          ['J', 'T', 'I', 'V', 'E']]
target2 = "PACANS"

input3 = [['h', 'e', 'c', 'm', 'l'],
          ['w', 'l', 'i', 'e', 'u'],
          ['a', 'r', 'r', 's', 'n'],
          ['s', 'i', 'i', 'o', 'r']]
target3 = "warrior"

input4 = [['C', 'Q', 'N', 'A'],
          ['P', 'S', 'E', 'I'],
          ['Z', 'A', 'P', 'E'],
          ['J', 'V', 'T', 'K']]
target4 = "SAVE"

input5 = [['O', 'Y', 'O', 'I'],
          ['B', 'Y', 'N', 'M'],
          ['K', 'D', 'A', 'R'],
          ['C', 'I', 'M', 'I'],
          ['Z', 'I', 'T', 'O']]
target5 = "DYNAMIC"

print(word_search(input1, target1))  # True
print(word_search(input2, target2))  # False
print(word_search(input3, target3))  # True
print(word_search(input4, target4))  # False
print(word_search(input5, target5))  # True
