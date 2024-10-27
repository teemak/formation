/*Build a Zig Zag Tree
This is a guide to help you with the algorithm Build a Zig Zag Tree. We recommend reading the solution like this:
Attempt the solution BEFORE reading this doc.
Read through the hints one at a time (not all at once). Try to see if it helps guide your thinking.
After reading the verbal solution, work through your own examples and attempt to code it up yourself before referring to any code solutions.
Prompt

Construct a zigzag tree from an array (alternating right and left child), starting with right.
Examples

Input: [1, 2, 3, 4, 5]
Output:
          1
            \
              2
             /
          3
            \
              4
             /
          5
Function Signature

def buildZigZagTree(array)
Solution

This problem is very similar to building a right child only tree with a little twist.
Create a root node with the first element from an input array.
While looping through the input array after the first element, create a right child node with its current value and repeat the process for the next node while alternating the left and right child position.
If you were to approach this problem recursively, use a condition argument (e.g. index that keeps track on the array's position until it reaches the end) which gets passed in the recursive function call.
You would also need a boolean variable as another argument in the recursive function call to keep track on which child position needs to be created (either left or right). Make sure to update this so the position alternates to make an output tree a zig zag shape.*/

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function solution(input) {
    if(!input) return null;

    function build(i, direction) {
        // base case
        if(i == input.length) return null;

        // logic
        const node = new Node(input[i]);

        if(direction) {
            // recursion towards base case
            node.right = build(i+1, !direction);
        } else {
            // recursion towards base case
            node.left = build(i+1, !direction);
        }
        return node;
    }

    return build(0, true);
}

let result = solution([1, 2, 3, 4, 5]);
console.log(JSON.stringify(result, null, 2));
