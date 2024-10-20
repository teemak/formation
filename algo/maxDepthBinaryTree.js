/*
 Maximum Depth of Binary Tree
Easy
Topics
Companies
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function maxDepth(root) {
    // base case - parent nodes return 0
    if(root === null) return 0;
    // traverse to left of current node
    const leftDepth = maxDepth(root.left);
    // if left is empty check right
    const rightDepth = maxDepth(root.right);
    // traversal has reached bottom (leaf node)

    // each stack frame represents height
    return 1 + Math.max(leftDepth, rightDepth);
}

const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log(maxDepth(root1)); // Output: 3

const root2 = new TreeNode(1);
root2.right = new TreeNode(2);

console.log(maxDepth(root2)); // Output: 2

