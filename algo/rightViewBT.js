class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function rightSideView(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];

    while(queue.length) {
        const levelSize = queue.length;

        for(let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if(i === levelSize - 1) {
                result.push(node.val);
            }

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.right = new TreeNode(7);

console.log(rightSideView(root)); // Output: [1, 5, 7]
