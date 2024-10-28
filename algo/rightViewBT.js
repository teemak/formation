class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function _rightSideView(root) {
    if(!root) return [];
    const queue = [root];
    const result = [];

    while(queue.length) {
        const level = queue.length;

        for(let i = 0; i < level; i++) {
            const node = queue.shift();

            if(i === level - 1) result.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return result;
}

function rightSideView(root) {
    const result = [];

    function helper(node, depth) {
        if(!node) return;

        if(depth === result.length) result.push(node.val);
        // need to traverse right subtree before left
        helper(node.right, depth+1); 
        helper(node.left, depth+1); 
    }
    helper(root, 0);
    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(7);

console.log(rightSideView(root)); // Output: [1, 5, 7]
