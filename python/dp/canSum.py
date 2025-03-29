def canSum(t, nums):
    if t == 0:
        return True
    if t < 0:
        return False

    for num in nums:
        remainder = t - num
        if canSum(remainder, nums):
            return True

    return False

t1, t2, t3 = 7, 8, 300
nums1, nums2, nums3, nums4, nums5 = [2,3], [5,3,4,7], [2,4], [2,3,5], [7,14]

print(canSum(t1, nums1))
print(canSum(t1, nums2))
print(canSum(t1, nums3))
print(canSum(t2, nums4))
print(canSum(t3, nums5))
