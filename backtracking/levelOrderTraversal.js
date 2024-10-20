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

// 0. handle edge case of empty trees
// 1. use 3 queues, main, parent and child nodes
// 2. iterate over main queue -
//  a. need queues to separate parent and child nodes
// 3. iterate parent queue - 
//  b. keep pushing children nodes to nextLevel
// 4. when node has no children, push that node to currentLevel queue
// 5. iterate over nextLevel queue (child nodes)
function levelOrderTraversal(root) {
    // 0. Edge case, input validation, no root - so return empty array
    if(!root) return [];

    // this is where nodes from a height will be stored
    const levels = [];
    // 1. queue needed for BFS - for children nodes
    let queue = [root]; // [1] queue is using array by reference

    // bottom to top, keep reducing
    // 2. 
    while(queue.length) {
        // const levelSize = queue.length;
        // a. parent/child queues
        const currentLevel = []; // store parent nodes
        const nextLevel = []; // holds nodes with children

        // 3. iterates over parent queue
        for(const node of queue) {
        //for(let i = 0; i < levelSize; i++) {
            // removed from front of queue - dequeue
            //const currentNode = queue.shift();
            //currentLevel.push(currentNode.val);

            // iterative BFS
            // remove children nodes, and store them for next iteration
            // b.
            if(node.left) nextLevel.push(node.left);
            if(node.right) nextLevel.push(node.right);
            // node with no children
            // 4.
            currentLevel.push(node.val);
        }
        // entire level is processed - then pushed
        levels.push(currentLevel);
        // move the iteration for children nodes
        // 5.
        queue = nextLevel;
    }

    return levels;
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

