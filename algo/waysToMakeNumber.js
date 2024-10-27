/*
'''
❓ PROMPT
Given an array of positive integers (greater than 1), and a target value, count the number of ways the target value can be created by concatenating pairs of values from the array. 

Example(s)
numbers = [1, 11, 12, 121, 21]
target = 1121

The result is 2 because there are two pairs that can be concatenated to make 1121, (11, 21) and (1, 121).

Possible combinations named by prefix and postfix for target: 1121

1.
Prefix: 1
Postfix: 121

2.
Prefix: 11
Postfix: 21

3.
Prefix: 112
Postfix: 1

 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function waysToMake(numbers, target) // return a number
def ways_to_make(numbers: list, target: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function _waysToMake(numbers, target) {
    const targetStr = String(target);
    let count = 0;

    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i !== j) {
                const concatStr = String(numbers[i] + String(numbers[j]));
                if(concatStr === targetStr) count++;
            }
        }
    }

    return count;
}

/*function waysToMake(numbers, target) {
    const targetStr = String(target);
    const count = new Map();

    for(const number of numbers) {
        const numStr = String(number);
        count.set(numStr, (count.get(numStr) || 0) + 1);
    }

    let totalCount = 0;

    for(const number of numbers) {
        const numStr = String(number);
        const requiredPostfix = targetStr.replace(numStr, '');

        if(count.has(requiredPostfix)) {
            totalCount += count.get(requiredPostfix);
            if(requiredPostfix === numStr) totalCount -= 1;
        }
    }

    return totalCount / 2;
}*/

/*function waysToMake(numbers, target) {
    const targetStr = String(target);
    const count = new Map();

    // Count occurrences of each number in string format
    for (const number of numbers) {
        const numStr = String(number);
        count.set(numStr, (count.get(numStr) || 0) + 1);
    }

    let totalCount = 0;

    // Check for valid concatenations
    for (const number of numbers) {
        const numStr = String(number);
        const requiredPostfix = targetStr.replace(numStr, '');

        // If the required postfix exists in the count map
        if (count.has(requiredPostfix)) {
            totalCount += count.get(requiredPostfix);

            // If the required postfix is the same as the current number
            // we need to subtract the pairs we just counted
            if (requiredPostfix === numStr) {
                totalCount -= 1; // Adjust for double counting
            }
        }
    }

    return totalCount / 2; // Each pair counted twice
}*/

function waysToMake(numbers, target) {
  // Convert numbers and target to strings since we'll work with substrings
  numbers = numbers.map((x) => x + "");
  target = target + "";

  // Generate a dictionary with prefixes of the target as keys and the corresponding postfixes as values
  const prepost = {};
  for (let i = 1; i < target.length; i++) {
    const pre = target.substring(0, i);
    const post = target.substring(i);
    prepost[pre] = post;
  }

  // Create a dictionary to count the occurrences of each number in the input list
  const counts = {};
  for (const number of numbers) {
    counts[number] = (counts[number] || 0) + 1;
  }

  let count = 0;
  for (const number of Object.keys(counts)) {
    const postfix = prepost[number];  // Get the corresponding postfix for the current number
    if (counts[postfix]) {
      if (number === postfix) {
        count += counts[postfix] * (counts[postfix] - 1);
      } else {
        count += counts[postfix] * counts[number];
      }
    }
  }

  return count;
}

// Test Case 1: One number with impossible target.
console.log(waysToMake([1], 11) === 0);

// Test Case 2: List with two same numbers.
console.log(waysToMake([1, 1], 11) === 2);

// Test Case 3: List with three numbers all the same.
console.log(waysToMake([1, 1, 1], 11) === 6);

// Test Case 4: List with multiple numbers with two unique digits.
console.log(waysToMake([12, 12, 121, 2, 1, 212], 1212) === 4);

// Test Case 5: List with many variations of numbers using a single digit.
console.log(waysToMake([777, 7, 777, 77, 77], 7777) === 6);
