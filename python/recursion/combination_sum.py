def combination_sum(nums, target):
    result = []

    def dfs(i, cur, total):
        if total == target:
            result.append(cur[:])
            return

        if i >= len(nums) or total > target:
            return

        cur.append(nums[i])
        dfs(i, cur, total + nums[i])

        cur.pop()
        dfs(i + 1, cur, total)

    dfs(0, [], 0)
    return result


num1 = [2, 5, 6, 9]
print(combination_sum(num1, 9))

num2 = [3, 4, 5]
print(combination_sum(num2, 16))

num3 = [3]
print(combination_sum(num3, 5))
