function isSymmetric(root) {
    if(!root) return true;

    function isMirror(t1, t2) {
        if(!t1 && !t2) return true;
        if(!t1 || !t2) return false;
        return (t1.val == t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }

    return isMirror(root.left, root.right);
}

function _isSymmetric(root) {
    if(!root) return true;

    // FIFO - shift == dequeue
    const queue = [root.left, root.right];

    while(queue.length) {
        const t1 = queue.shift();
        const t2 = queue.shift();

        if(!t1 && !t2) continue;
        if(!t1 || !t2) return false;
        if(t1.val !== t2.val) return false;

        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }

    return true;
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

console.log(_isSymmetric(tree1)); // Output: true
console.log(_isSymmetric(tree2)); // Output: false
