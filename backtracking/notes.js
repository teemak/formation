function factorial(n) {
    // 1. break down problem into smaller subproblems
    //base case 
    //recursive case - call function with different argument, getting closer to base case

    if(n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
    // 5 * factorial(4) * 3 * 2 * 1
}

// console.log(factorial(5));

function fibNums(n, memo = {}) {
    //base case
    if (n === 1 || n === 2) {
        return 1;
    }

    if(memo[n]) {
        return memo[n];
    }

    memo[n] = fibNums(n-1, memo) + fibNums(n-2, memo);
    return memo[n];

    // work towards 2 or 1
    // return fibNums(n - 1) + fibNums(n - 2);
}

console.log(fibNums(8)); // [1,1,2,3,5,8,12,21]
