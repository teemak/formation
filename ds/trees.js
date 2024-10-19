class ListNode {
  constructor(val, left=null, right=null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


// Creating the following tree and searching through it
//             21
//      14             28
//  11     18      25      32
// 5 12   15 19   23 27   30 37

let a = new ListNode(5); let b = new ListNode(12)
let c = new ListNode(15); let d = new ListNode(19)
let e = new ListNode(23); let f = new ListNode(27)
let g = new ListNode(30); let h = new ListNode(37)
let leftLeft = new ListNode(11, a, b)
let leftRight = new ListNode(18, c, d)
let rightLeft = new ListNode(25, e, f)
let rightRight = new ListNode(32, g, h)
let left = new ListNode(14, leftLeft, leftRight)
let right = new ListNode(28, rightLeft, rightRight)
let root = new ListNode(21, left, right)


//####################
//### IMPLEMENT ME ###
//####################
// 3 conditions - 1. match, 2. look left, 3. look right
function iterativeSearchInBST(root, target) {
    let current = root;

    while(current) {
        // return match
        if(target === current.val) {
            return current;
        } else if(target < current.val) {
            // check val on left
            current = current.left;
        } else {
            // check val on right
            current = current.right;
        }
    }

    return null;
}

//####################
//### IMPLEMENT ME ###
//####################
function recursiveSearchInBST(root, target) {
    //base case - no root
    if(!root) return null;
    // target is a match
    if(target === root.val) return root;
    // look left
    else if(target < root.val) return recursiveSearchInBST(root.left, target);
    // look right
    return recursiveSearchInBST(root.right, target);
}

// left -> root -> right
function printInOrder(root) {
    let string = '';

    function recurse(node) {
        if(!node) return;
        recurse(node.left);
       
        if(string.length === 0) {
            string += node.val;
        } else {
            string += ' -> ' + node.val;
        }
        
        recurse(node.right);
    }

    recurse(root);
    return string;
}

// left -> root -> right
function _inOrder(root) {
    if(!root) return;
    preOrder(root.left);
    console.log(root.val);
    preOrder(root.right);
}

// root -> left -> right
function preOrder(root) {
    if(!root) return;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

// left -> right -> root
function postOrder(root) {
    if(!root) return;
    preOrder(root.left);
    preOrder(root.right);
    console.log(root.val);
}

// BFS || Level order, node -> left -> right
function levelOrder(root) {
    if(!root) return;
    const queue = [root];
    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
}

let target1 = 27
let target2 = 29

//             21
//      14             28
//  11     18      25      32
// 5 12   15 19   23 27   30 37
var output = null

const res1 = iterativeSearchInBST(root, target1);
//console.log(res1);

const res2 = iterativeSearchInBST(root, target2);
//console.log(res2);

const res3 = recursiveSearchInBST(root, target1);
//console.log(res3);

const res4 = recursiveSearchInBST(root, target2)
//console.log(res4);

console.log('IN ORDER (left -> root -> right)');
console.log(printInOrder(root));
console.log('END ********* IN ORDER');
console.log('PRE ORDER (root -> left -> right)');
 console.log(preOrder(root));
console.log('END ********* PRE ORDER');
console.log('POST ORDER (left -> right -> root)');
console.log(postOrder(root));
console.log('END ********* POST ORDER');
console.log('BFS - LEVEL ORDER (print at every height descending)');
console.log(levelOrder(root));
