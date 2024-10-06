// VOID FUNCTION -- forEach
function logEvenNumbers(arr) {
    arr.forEach(num => {
        if(num % 2 === 0) {
            console.log(num);
        }
    });
}

const arr1 = [1,2,3,4,5,6];
// logEvenNumbers(arr1);

// RETURNS NEW ARRAYS -- map and filter
function isPrime(num) {
    // numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        // if divisible by any number then it's not prime
        if (num % i === 0) return false;
    }
    // return num;
    return true;
}
function mapPrimes(arr) {
    return arr.map(num => isPrime(num));
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}

const arr2 = new Array(100).fill(0).map((_, i) => i + 1);
// console.log(arr2);

const result2 = mapPrimes(arr2);
//console.log(result2);

const result3 = filterPrimes(arr2);
//console.log(result3);

// RETURNS SINGLE SCALAR -- reduce
function findMax(arr) {
    return arr.reduce((max, current) => Math.max(max, current), arr[0]);
}
const result4 = findMax(arr2);
// console.log(result4);

// TWO POINTERS
// runtime of O(n/2) => O(n)
function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1; // needs - 1, for zero based index, cardinality always starts at 1
    while(left < right) {
        // left pointer compares value at right pointer's value
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

//console.log(isPalindrome([1, 2, 3, 2, 1]), true); // Output: true
//console.log(isPalindrome([1, 2, 3, 4, 5]), false);// Output: false

// SLIDING WINDOW
function maxSubArraySum(arr, k) {
    if (k > arr.length) return null;

    let maxSum = 0;
    let windowSum = 0;

    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // slide window
    for(let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

const numbers = [1,4,2,10,23,3,1,0,20];
//console.log(maxSubArraySum(numbers, 4));

function sumNestedArray(arr) {
    let sum = 0;

    for(let element of arr) {
        // check for nested arrays
        if(Array.isArray(element)){
            sum += sumNestedArray(element);
        } else {
            // base case
            sum += element;
        }
    }
    return sum;
}

const nestedNumbers = [1, [2, 3], [[4, 5], 6]]; // 21
console.log(sumNestedArray(nestedNumbers));
