/*This is a guide to help you with the algorithm Build a Right Child Only Tree. We recommend reading the solution like this:
Attempt the solution BEFORE reading this doc.
Read through the hints one at a time (not all at once). Try to see if it helps guide your thinking.
After reading the verbal solution, work through your own examples and attempt to code it up yourself before referring to any code solutions.
Prompt

Construct a right child only tree from a given array.
Examples

Input: [1, 2, 3]
Output: 
          1
            \
              2
                \
                 3
Function Signature

def buildRightChildOnlyTree(array)
Solution

Create a root node with the first element from an input array.
While looping through the input array after the first element, create a right child tree with its current value and repeat the process for the next right child tree.
If you were to approach this problem recursively, use a condition argument (e.g. index that keeps track on the array's position until it reaches the end) which gets passed in the recursive function call.*/

function node(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// input: [1,2,3]
// output: 1 
//        / \
//     null  2
//          / \
//       null  3

function _solution(input) {
    if(!input) return null;
    let root = new node(input[0]);
    let current = root;
    
    for(let i = 1; i < input.length; i++) {
        current.right = new node(input[i]);
        current = current.right;
    }

    return root;
}

function solution(input, idx = 0) {
    if(idx >= input.length) return null;
    const root = new node(input[idx]);
    root.right = solution(input, idx+1);
    return root;
}

let res1 = solution([1,2,3,4,5,6]);
console.log(JSON.stringify(res1, null, 2));
