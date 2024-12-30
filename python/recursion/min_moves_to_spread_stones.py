def minimum_moves(grid):
    valid_stones = sum(sum(row) for row in grid) > 8
    if not valid_stones:
        return -1

    extras = []
    zeros = []
    min_moves = float('inf')

    for i, row in enumerate(grid):
        for j, value in enumerate(row):
            if value == 0:
                zeros.append([i, j])
            elif value > 1:
                extras.append([i, j, value])

    def dfs(i, count):
        nonlocal min_moves
        if i >= len(zeros):
            min_moves = min(min_moves, count)
            return

        # move extra stone to empty cell
        for _, extra in enumerate(extras):
            if extra[2] > 0:
                extra[2] -= 1
                distance = abs(extra[0] - zeros[i][0]) + abs(extra[1] - zeros[i][1])
                # continue DFS
                dfs(i + 1, count + distance)
                # backtrack
                extra[2] += 1

    dfs(0, 0)
    return min_moves if min_moves != float('inf') else - 1


grid = [[2, 0, 2], [1, 1, 1], [1, 1, 0]]
print(minimum_moves(grid))  # 3
