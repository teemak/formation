/*
 * OK, we'll give you a hint: it's either BFS or DFS.
 * We'll let you continue to think about which one is relevant here.
 * This is an example of how knowing the basic technique (BFS or DFS) allows you to focus
 * on just the difference in this particular algorithm rather than having to solve it from scratch.
 * We'll also expect a clean implementation of a solution.
 * On a good day, this should be possible in 5-7 minutes or less.
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Notice that the Leetcode version of the problem has you return the level order traversal
 * instead of printing it out. This allows Leetcode to judge the answer more easily.
 * You should be able to make a tiny modification to make it print instead
 * (not required but feel free to explore)
*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function levelOrderTraversal(root) {
    // Edge case, input validation, no root - so return empty array
    if(!root) return [];

    let result = [];
    // queue needed for BFS
    const queue = [root]; // [1] queue is using array by reference

    // bottom to top, keep reducing
    while(queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for(let i = 0; i < levelSize; i++) {
            // removed from front of queue - dequeue
            const currentNode = queue.shift();
            currentLevel.push(currentNode.val);

            // iterative BFS
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }

        // entire level is processed - then pushed
        result.push(currentLevel);
    }

    return result;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
console.log('Tree: ', root1);
console.log(levelOrderTraversal(root1)); // Output: [[1], [2, 3]]

// Example 2
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);

console.log(levelOrderTraversal(root2)); // Output: [[1], [2, 3], [4, 5]]

