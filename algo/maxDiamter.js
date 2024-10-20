class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function solution(root) {
    let maxDiameter = 0;

    // Helper function to calculate the height of the tree.
    function height(node) {
        if (!node) return 0; // Base case: if the node is null, its height is 0

        // Recursively calculate the height of the left and right subtrees
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        // Update the diameter: check if the current path through the node is the longest
        let currentDiameter = leftHeight + rightHeight + 1;
        maxDiameter = Math.max(maxDiameter, currentDiameter);

        // Return the height of the tree rooted at this node
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Start the recursion from the root node
    height(root);

    // The number of nodes in the longest path minus 1 gives the number of edges in that path
    return maxDiameter;
}

// Example usage:
let t1 = new TreeNode(0,
    new TreeNode(1, null, 
        new TreeNode(2, new TreeNode(3), new TreeNode(4))
    ),
    new TreeNode(5, new TreeNode(6), null)
);

let t2 = new TreeNode(1, null, 
    new TreeNode(2, 
        new TreeNode(3, null, new TreeNode(7)), 
        new TreeNode(4, new TreeNode(6), new TreeNode(5))
    )
);

console.log(solution(t1)); // Output: 6
console.log(solution(t2)); // Output: 5

