/*
'''
❓ PROMPT
Given an array, reverse every sub-array formed by consecutive k elements.

Example(s)
Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3
Output: [3, 2, 1, 6, 5, 4, 9, 8, 7]

Input: arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 5
Output: [5, 4, 3, 2, 1, 8, 7, 6]

Input: arr = [1, 2, 3, 4, 5, 6], k = 1
Output: [1, 2, 3, 4, 5, 6]

Input: arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 10
Output: [8, 7, 6, 5, 4, 3, 2, 1] 
 

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
function reverse(arr, k) {
def reverse(arr: list[int], k: int) -> None:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function reverseInGroups(arr, k) {
    let result = [];

    // iterate by the size of subarray
    for(let i = 0; i < arr.length; i += k) {
        // get subarray of size K
        let chunk = arr.slice(i, i + k)  // [1, 2, 3] 
        // reverse the subarray
        result.push(...chunk.reverse()); // [3, 2, 1]
    }

    return result;
}

// Test cases
console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [3, 2, 1, 6, 5, 4, 9, 8, 7]
console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8], 5));    // [5, 4, 3, 2, 1, 8, 7, 6]
console.log(reverseInGroups([1, 2, 3, 4, 5, 6], 1));          // [1, 2, 3, 4, 5, 6]
console.log(reverseInGroups([1, 2, 3, 4, 5, 6, 7, 8], 10));   // [8, 7, 6, 5, 4, 3, 2, 1]
