/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
 

Example 1:


Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
Example 3:

Input: root = [], key = 0
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-105 <= Node.val <= 105
Each node has a unique value.
root is a valid binary search tree.
-105 <= key <= 105
 

Follow up: Could you solve it with time complexity O(height of tree)?
*/
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let tree = new TreeNode(1, null, new TreeNode(0, new TreeNode(0), new TreeNode(1))); //[1, null, 0, 0, 1]

// Prune binary tree
function deleteNode(root) {
    // replace 0 value nodes with null, ONLY if there are no children
    function prune(node) {
        // base case
        if(!node) return null;

        // travel to bottom of left subtree
        node.left = prune(node.left);
        // travel to bottom of right subtree
        node.right = prune(node.right);
        
        let hasNoChild = !node.left && !node.right;
        // check if val is zero, and if it's a leaf node => prune if condition met
        if(node.val === 0 && hasNoChild) return null;

        // node has a 1 value and should remain in tree
        return node;
    }

    return prune(root);
}

let res1 = deleteNode(tree, 0);
console.log(res1);

