class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function deleteNode(root, target) {
    // 1. search the node
    //  a. if node's val is < key, recursively search left subtree
    //  b. '' search right subtree
    //  c. node.val === target
    // 2. handle deletion
    //  a. leaf node - node.val = null
    //  b. one child - current node = node.child (left, right)
    //  c. two children - 
    //   i.  replace node with in-order successor
    //   ii. delete successor node in right subtree

    // edge case
    if(!root) return null;

    if(target < root.val) {
        root.left = deleteNode(root.left, target);
    } else if(target > root.val) {
        root.right = deleteNode(root.right, target);
    } else {
        // handle deletion
        if(!root.left && !root.right) return null; // leaf node
        if(!root.left) return root.right; // one child - no left
        else if(!root.right) return root.left; // one child - no right

        // two children nodes
        // need to find the smallest node from right subtree
        // because this will replace the current node
        // in-order successor is the smallest node in right subtree
        // next highest value would be current node
        // delete in-order successor from original position because it
        // will never have a left child
        let successor = findMin(root.right); // get smallest value from right subtree
        // delete - lowest value becomes the current value
        // minimize change to tree - only replace the value and not node
        root.val = successor.val; 
    
        // two nodes with same val as the successor value
        // keep deleting the successor node in right subtree
        root.right = deleteNode(root.right, successor.val); 
    }

    return root;
}

function findMin(node) {
    while(node.left) {
        node = node.left;
    }
    return node;
}

let root = new TreeNode(5);
root.left = new TreeNode(3, new TreeNode(2), new TreeNode(4));
root.right = new TreeNode(6, null, new TreeNode(7));

let key = 3;  // Node to delete
let updatedRoot = deleteNode(root, key);
console.log(updatedRoot);


