/*
You are given the root node of a binary search tree (BST) and a value to insert into the tree.
Return the root node of the BST after the insertion.
It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion,
as long as the tree remains a BST after insertion.
You can return any of them.

Example 1:
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:

Example 2:
Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]
Example 3:

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]

Constraints:
The number of nodes in the tree will be in the range [0, 104].
-108 <= Node.val <= 108
All the values Node.val are unique.
-108 <= val <= 108
It's guaranteed that val does not exist in the original BST.
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function insertIntoBST(root, val) {
    // a helper function is needed if storing a global variable
    // 3 conditions
    // 0. check left - val is less than root.val
    // let current = root.val;
    // console.log('CURRENT: ', current);
    if(!root) return new TreeNode(val);

    if(val < root.val) {
        // 1. check if node is empty for insert
        root.left = insertIntoBST(root.left, val);
    } else if(val > root.val) {
        // 2. check right - val is greater than root.val
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}
// left -> root -> right
function inOrder(root) {
    if(!root) return;
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

//Input: root = [4,2,7,1,3], val = 5
//Output: [4,2,7,1,3,5]
let tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
//const root = [4,2,7,1,3];
const val = 5;
let res1 = insertIntoBST(tree, val);
let res2 = insertIntoBST(tree, 6);
inOrder(tree);
console.log(res2);
