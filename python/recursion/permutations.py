def permutations(nums):
    res = []

    def backtrack(start):
        # base case - current list is complete permutation
        if start == len(nums):
            res.append(nums[:])
            return

        for i in range(start, len(nums)):
            # swap current with next
            nums[start], nums[i] = nums[i], nums[start]

            # move to next value
            backtrack(start + 1)

            # backtrack by swapping back
            nums[start], nums[i] = nums[i], nums[start]

    backtrack(0)
    return res


num = [1, 2, 3]
print(permutations(num))
