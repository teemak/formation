/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 

Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]
 

Constraints:

The number of nodes in the tree is in the range [1, 100].
-100 <= Node.val <= 100
*/

class BinaryTree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(arr, idx = 0) {
    if(idx >= arr.length || arr[idx] === null) return null;

    let node = new BinaryTree(arr[idx]);
    node.left = buildTree(arr, 2 * idx + 1);
    node.right = buildTree(arr, 2 * idx + 2);

    return node;
}

function binaryTreePaths(arr) {
    // keep track of paths
    let paths = [];
    let root = buildTree(arr);
    
    // recurse over an array 
    function recurse(node, path) {
        //base case - no node => return
        if(!node) return;

        // build paths
        path += node.val;
        
        if(!node.left && !node.right) {
            // leaf node
            paths.push(path);
        } else {
            // keep traversing
            path += '->';
            recurse(node.left, path);
            recurse(node.right, path);
        }
    }

    recurse(root, '');
    return paths;
}

let input1 = [1, 2, 3, null, 5]
let res1 = binaryTreePaths(input1); // [1->2->5, 1->3]
console.log(res1); //
