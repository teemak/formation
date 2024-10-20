/* CORE ALGORITHM */
// 1. traverse tree
// 2. 3 cases
//  i. match
//  ii. current.val < target, i.e.  6 < 18 -> look to right node
//  ii. current.val > target, i.e. 26 < 18 -> look to left node
// 3. finished traversal, return false
function searchBST(root, target) {
    let current = root;
    
    while(current) {
        if(current.val === target) return true;
        else if(current.val < target) current = current.right;
        else current = current.left;
    }
    return false;
}

class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/* CORE ALGORITHM */
// 1. traverse tree
// 2. look for parent node
//  i.  current.val < targetValue, i.e.  9 < 18 -> belongs on right
//   a. replace current.right value
//   b. create new node
//  ii. current.val > targetValue, i.e. 20 > 18 -> belongs on leftc
//   a. replace current.left value
//   b. create new node
// 3. return root after insert to stop iterating
function insertBST(root, val) {
    if (!root) return new TreeNode(val);
    let current = root;

    while(current) {
        if(current.val < val) {
            if(current.right) current = current.right;
            else {
                current.right = new TreeNode(val);
                return root;
            }
        } else {
            if(current.left) current = current.left;
            else {
                current.left = new TreeNode(val);
                return root;
            }
        }
    }
}

function maxDepth(root) {
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function printTree(root) {
    if(!root) return;

    const depth = maxDepth(root);
    const levels = [];

    const queue = [{node: root, level: 0 }];

    while(queue.length > 0) {
        const { node, level } = queue.shift();

        if(!levels[level]) levels[level] = [];
        levels[level].push(node ? node.val : null);

        if(node) {
            queue.push({ node: node.left, level: level + 1 });
            queue.push({ node: node.right, level: level + 1 });
        }
    }

    // console.log('Depth');
    function printLevel(nodes, level, depth) {
        //console.log('level: ', level);
        //console.log('Depth: ', depth);
        const spaces = ' ';
        // const spaces = ' '.repeat(Math.pow(2, depth - level)-1);
        let line = '';

        for(let i = 0; i < nodes.length; i++) {
            if(nodes[i] !== null) line += spaces + nodes[i] + spaces;
            else line += spaces + ' ' + spaces;
        }

        console.log(line);
        //console.log(level + line);
    }

    function printConnections(nodes, level, depth) {
        const spaceEdges = Math.pow(2, depth - level) - 1;
        const spaceFirst = Math.pow(2, depth - level + 1) - 1;

        let line = ' '.repeat(spaceFirst);

        for(let i = 0; i < nodes.length; i++) {
            if(nodes[i] !== null) {
                if(i % 2 == 0) line += '/';
                else line += ' ';
            } else {
                line += ' ';
            }

            line += ' '.repeat(spaceEdges);

            if(nodes[i] !== null && i % 2 == 0) line += '\\';
            else line += ' ';
        }

        console.log(line);
    }

    for(let i = 0; i < levels.length; i++) {
        printLevel(levels[i], i, depth);
        // if(i < levels.length - 1) printConnections(levels[i], i, depth);
    }
}

function print(root, nodes = []) {
    if(!root) return;
    if(root) {
        print(root.left, nodes);
        nodes.push(root.val);
        print(root.right, nodes);
    }
}

/* CORE ALGORITHM */
// 1. iterate tree
// 2. base case - no node
// 3. helper function will check value with arguments of connecting node, lower bound, upper bound
// 4. check if value is: (min < node.val < max)
//  i.  out of bounds -> return false
//  ii. recursively check (node.left, min, current.val) && (node.right, current.val, max) 
// 5. start recursive call with (current node, minimum, maximum)
function validateBST(node) {
    function helper(node, min, max) {
        if(!node) return true;
        else if(node.val <= min || node.val > max) return false;
        return (helper(node.left, min, node.val) && helper(node.right, node.val, max));
    }
    return helper(node, -Infinity, Infinity);
}

let tree = new TreeNode(7, 
    new TreeNode(6, new TreeNode(5, new TreeNode(3))),
    new TreeNode(9, new TreeNode(8), new TreeNode(10)));

console.log(searchBST(tree, 3));
console.log(searchBST(tree, 4));
console.log(searchBST(tree, 10));
insertBST(tree, 4);
console.log(searchBST(tree, 4));
insertBST(tree, 24);
insertBST(tree, 12);
printTree(tree);
console.log(validateBST(tree));
console.log(searchBST(tree, 16));
print(tree);

function buildBalancedBST(sortedNodes, start, end) {
    if(start > end) return null;
    const mid = Math.floor((start+end) / 2);
    const node = new TreeNode(sortedNodes[mid]);
    node.left = buildBalancedBST(sortedNodes, start, mid -1);
    node.right = buildBalancedBST(sortedNodes, mid +1, end);
    return node;
}

function balanceBST(root) {
    const sortedNodes = [];
    print(root, sortedNodes);
    return buildBalancedBST(sortedNodes, 0, sortedNodes.length -1);
}

tree = balanceBST(tree);
printTree(tree);
