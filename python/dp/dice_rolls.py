def numRolls(n, k, target):
    dp = [[0] * (target + 1) for _ in range(n + 1)]
    
    # base case
    dp[0][0] = 1
    
    # rolling n dices in outer loop
    for dice in range(1, n + 1): #iterate dices
        print('*' * dice)
        print('*' * dice, 'rolling this dice: ', dice)
        print('*' * dice)
        #print('rolling this dice:', dice)

        for curr_sum in range(1, target + 1): #iterate sums
            print('----\n')
            print('Running total is: ', curr_sum) # running total of dice rolls

            for value in range(1, k + 1): # value is dice face value from 1 up to k + 1 inclusive, we loop k times
                print('Value of dice rolls starts at 1 and increasing to k(sides of dice)', value)
                prev_sum = curr_sum - value
                if prev_sum >= 0:
                    print('previous is more than zero')
                    current = dp[dice][curr_sum]
                    print(current)
                    previous = dp[dice - 1][prev_sum]
                    print(previous)
                    current = current + previous
                    # dp[dice][curr_sum] = dp[dice][curr_sum] + dp[dice-1][prev_sum]
    
    return dp[n][target]
    
    
print(numRolls(2, 6, 7))
