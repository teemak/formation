function largestValues(root) {
    let maxNumbers = [];

    function findLargest(node, col) {
        if(!node) return;

        if(col >= maxNumbers.length) {
            maxNumbers.push(Number.MIN_SAFE_INTEGER);
        }

        if(node.val > maxNumbers[col]) {
            maxNumbers[col] = node.val;
        }

        findLargest(node.left, col+1);
        findLargest(node.right, col+1);
    }

    findLargest(root, 0);
    return maxNumbers;
}

function _largestValues(root) {
    if(!root) return [];

    let result = [];
    let queue = [root];

    while(queue.length > 0) {
        let levelSize = queue.length;
        let max = -Infinity;

        for(let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            max = Math.max(max, node.val);
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        result.push(max);
    }

    return result;
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let tree1 = new TreeNode(1, 
    new TreeNode(3, new TreeNode(5), new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(9))
);

let tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(_largestValues(tree1)); // Output: [1, 3, 9]
console.log(_largestValues(tree2)); // Output: [1, 3]

