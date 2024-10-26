/*Number of Nodes Less than K in Binary Tree
This is a guide to help you with the algorithm Number of Nodes Less than K in Binary Tree. We recommend reading the solution like this:
Attempt the solution BEFORE reading this doc.
Read through the hints one at a time (not all at once). Try to see if it helps guide your thinking.
After reading the verbal solution, work through your own examples and attempt to code it up yourself before referring to any code solutions.
Prompt

Given a binary tree and a target k, count the number of nodes that has a value less than k.
Examples

Input:
tree:
          1 
        /    \
      7       2
     / \      / \
   3   6   5   3
k: 4
Output: 4
Function Signature

def countNodesLessThanKTree(root, target)
Solution

You should be familiar with any of the tree traversal methods (e.g. In-order, Pre-order, Post-order).
Use a counter variable to keep track on the number of tree nodes whose value is less than k.
Traverse the input binary tree using any of the tree traversals and compare the current element's value to k. If the current value is less than k, update the counter, and return the counter after vising all nodes.
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const tree1 = new TreeNode(1);
const _three = new TreeNode(3);
const three_ = new TreeNode(3);
const six = new TreeNode(6);
const five = new TreeNode(5);

tree1.left = new TreeNode(7, _three, six);
tree1.right = new TreeNode(2, five, three_);

//console.log(tree1);

function solution(root, k) {
    let count = 0;

    function helper(node) {
        // base case
        if(!node) return;
        // logic for count
        if(node.val < k) count++;
        // traverse left-right
        helper(node.left);
        helper(node.right);
    }
    // first call
    helper(root);

    return count;
}

let res1 = solution(tree1, 4);
console.log(res1);
