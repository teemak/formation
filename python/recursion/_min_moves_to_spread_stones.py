def min_moves(grid):
    # collect positions of zeros and extras
    zeros = []
    extras = []
    min_moves = float('inf')

    for i in range(3):
        for j in range(3):
            if grid[i][j] == 0:
                zeros.append((i, j))
            elif grid[i][j] > 1:
                # store position and value
                extras.append((i, j, grid[i][j] - 1))

    def dfs(idx, current_moves):
        nonlocal min_moves
        # base case - all zero cells updated
        if idx == len(zeros):
            min_moves = min(min_moves, current_moves)
            return
        # current zero cell
        zero_x, zero_y = zeros[idx]

        # iterate - fill current zero from extras
        for k, (extra_x, extra_y, extra_count) in enumerate(extras):
            if extra_count > 0:
                # take stone
                extras[k] = (extra_x, extra_y, extra_count - 1)
                # manhattan distance
                distance = abs(extra_x - zero_x) + abs(extra_y - zero_y)
                # dfs traversal for next zero
                dfs(idx + 1, current_moves + distance)
                # backtrack
                extras[k] = (extra_x, extra_y, extra_count)

    dfs(0, 0)
    return min_moves


grid = [[0, 0, 1], [1, 0, 4], [1, 1, 1]]
print(min_moves(grid))  # 6

grid2 = [[2, 0, 0], [1, 4, 1], [0, 1, 0]]
print(min_moves(grid2))  # 7
