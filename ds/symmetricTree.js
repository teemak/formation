function isSymmetric(root) {
    if(!root) return true;

    function isMirror(t1, t2) {
        if(!t1 && !t2) return true;
        if(!t1 || !t2) return false;
        return (t1.val == t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }

    return isMirror(root.left, root.right);
}

class TreeNode{
    constructor(val, left, right) {
        this.val = val || 0;
        this.left = left || null;
        this.right = right || null;
    }
}

let tree1 = new TreeNode(1, 
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

let tree2 = new TreeNode(1, 
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
);

console.log(isSymmetric(tree1)); // Output: true
console.log(isSymmetric(tree2)); // Output: false
