class BTNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const tree = new BTNode(5);
const six = new BTNode(6);
const nine = new BTNode(9);
const two = new BTNode(2);
const three = new BTNode(3);
const one1 = new BTNode(1);
const one2 = new BTNode(1);
tree.left = six;
six.left = two;
six.right = three;
tree.right = nine;
nine.left = one1;
nine.right = one2;

console.log(tree);

function findLargestPathSum(root) {
    const stack = [];
    let largestSoFar = Number.MIN_VALUE;
    
    function dfsHelper(root) {
        // base case
        if(!root.left && !root.right) {
            const sum = stack.reduce((a, total) => a + total, 0); // [5+6], [5+9]
            largestSoFar = Math.max(sum + root.val, largestSoFar); // max [2 + 11] or [largetSoFar], [1 + 14]
            return; // [13]
        }
        // try all options
        stack.push(root.val); // [5], [5,6], [5,9]
        if(root.left) {
            dfsHelper(root.left) // search [6], [2], [1]
        }
        if(root.right) { // stack [5]
            dfsHelper(root.right) // [9]
        }
        // removes the 6 from current path
        stack.pop();
    }


    if(root) {
        dfsHelper(root);
    }
    return largestSoFar;
}

console.log(findLargestPathSum(tree) === 15 ? 'pass' : 'fail');
