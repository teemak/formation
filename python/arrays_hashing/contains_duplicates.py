from typing import List


class Solution:
    def brute_force(self, nums: List[int]) -> bool:
        '''
        time:  O(n^2)
        space: O(1)
        '''
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True
        return False

    def sorting(self, nums) -> bool:
        '''
        time:  O(n log n)
        space: O(1) or O(n) depends on sorting algo
        '''
        nums.sort()
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1]:
                return True
        return False

    def hash_set(self, nums: List[int]) -> bool:
        '''
        time:  O(n)
        space: O(n)
        '''
        seen = set()

        for num in nums:
            if num in seen:
                return True
            seen.add(num)

        return False

    def hash_set_length(self, nums: List[int]) -> bool:
        '''
        time:  O(n)
        space: O(n)
        '''
        return len(set(nums)) < len(nums)


nums = [1, 2, 3, 3]
print(Solution().brute_force(nums))
print(Solution().hash_set_length(nums))
print(Solution().sorting(nums))
print(Solution().hash_set_length(nums))
