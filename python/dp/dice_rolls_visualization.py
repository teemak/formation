def numRollsTarget(dice, sides, target):
    def helper(dice, target, indent=0):
        print("  " * indent + f"helper({dice}, {target})")
        if dice == 0:
            return 1 if target == 0 else 0
        count = 0
        for val in range(1, sides + 1):
            count += helper(dice - 1, target - val, indent + 1)
        return count
    return helper(dice, target)
    
print(numRollsTarget(3, 6, 7))
