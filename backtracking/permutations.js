/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
Given an array nums of distinct integers, return all the possible 
permutations
. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/

function _permute(arr) {
    const result = [];
    
    function backtrack(currentPermutation, used) {
        if(currentPermutation.length === arr.length) {
            result.push([...currentPermutation]);
            return;
        }

        for(let i = 0; i < arr.length; i++) {
            if(used[i]) continue;
            
            currentPermutation.push(arr[i]);
            used[i] = true;

            backtrack(currentPermutation, used);
            currentPermutation.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(arr.length).fill(false));

    return result;
}

function permute(input) {
    const result = []; 

    function swap(i, j) {
        // inplace swapping
        [input[i], input[j]] = [input[j], input[i]];
    }
    
    function recurse(start) {
        // base case - recursion reaches last element, then push
        if(start === input.length - 1) {
            result.push([...input]);
            return;
        }
        // start is incrementing
        // does not change order
        recurse(start + 1);

        // swap current starting with each remaining location
        for(let i = start + 1; i < input.length; i++) {
            swap(start, i); // [1,3,2] result.push() // [2,1,3]
            recurse(start + 1);
            // restore original state
            swap(start, i);
        }
    }

    recurse(0);

    return result;
}

let input = [1,2,3];
let result = permute(input); 
// [[1,2,3],[1,3,2],
// [2,1,3],[2,3,1],
// [3,1,2],[3,2,1]]
console.log(result);

let input2 = [0,1]
let result2 = permute(input2);
console.log(result2); // [[0,1],[1,0]];


let input3 = [1]
let result3 = permute(input3);
console.log(result3); // [[1]]
