class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function countElements(root) {
    const stack = root ? [root] : [];
    let result = 0;

    while(stack.length) {
        const node = stack.pop();
        result += 1;
        // keep pushing children nodes into stack
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }

    return result;
}

function _countElements(root) {
    if(!root) return 0;
    return (1 + _countElements(root.left) + _countElements(root.right));
}

function sumElementsBinaryTree(root) {
    const stack = root ? [root] : [];
    let sum = 0;

    while(stack.length) {
        const node = stack.pop();
        sum += node.val;
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }

    return sum;
}

function _sumElementsBinaryTree(root) {
    if(!root) return 0;
    return (root.val + _sumElementsBinaryTree(root.left) + _sumElementsBinaryTree(root.right));
}

function maxElement(root) {
    if(!root) return null;
    let stack = root ? [root] : [];
    // console.log(root.val);
    let max = root.val;

    while(stack.length) {
        const current = stack.pop();
        max = Math.max(current.val, max);
        // console.log(max);
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }

    return max;
}

function _maxElement(root) {
    if(!root) return null;
    return Math.max(root.val,
        _maxElement(root.left) || -Infinity,
        _maxElement(root.right) || -Infinity);
}

function findDepthBT(root) {
    if(!root) return null;
    return 1 + Math.max(findDepthBT(root.left), findDepthBT(root.right));
}

// BFS - O(n), O(w) - Q: FIFO
function findElementBT_BFS(root, target) { // 3, 9, 20, 15, 7
    let queue = root ? [root] : [];

    while(queue.length) {
        let node = queue.shift(); // dequeue 1st element - FIFO

        if(node.val == target) return true;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return false;
}

// DFS - O(n), O(h) - Stack: LIFO
function findElementBT_DFS(root, target) { // 3, 20, 7, 15, 9
    let stack = root ? [root] : [];

    while(stack.length) {
        let node = stack.pop(); // pop last element LIFO
        if(node.val === target) return true;
        console.log(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
}

// DFS - preOrder root, left, right
function findElementBT(root, target) { // 3, 9, 20, 15, 7
    if(!root) return null;
    // 1. target matches node
    if(root.val == target) return root.val;
    console.log(root.val);
    // 2. search left subtree
    let leftResult = findElementBT(root.left, target);
    if(leftResult != null) return leftResult;
    // 3. search right subtree
    return findElementBT(root.right, target);
}

const root1 = new TreeNode(3);       //  3
root1.left = new TreeNode(9);        // 12
root1.right = new TreeNode(20);      // 32
root1.right.left = new TreeNode(15); // 47
root1.right.right = new TreeNode(7); // 54

// console.log(_countElements(root1));
// console.log(countElements(root1));
// console.log(sumElementsBinaryTree(root1));
// console.log(_sumElementsBinaryTree(root1));
// console.log(maxElement(root1));
// console.log(_maxElement(root1));
// console.log(findDepthBT(root1));
//console.log(findElementBT(root1, 3));
//console.log(findElementBT(root1, 15));
//console.log(findElementBT(root1, 20));
//console.log(findElementBT(root1, 7));
//console.log(findElementBT(root1, 100));
console.log(findElementBT_BFS(root1, 3));
console.log(findElementBT_BFS(root1, 15));
console.log(findElementBT_BFS(root1, 20));
console.log(findElementBT_BFS(root1, 7));
console.log(findElementBT_BFS(root1, 100));
