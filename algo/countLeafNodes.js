/*This is a guide to help you with the algorithm Number of Leaf BT Nodes. We recommend reading the solution like this:
Attempt the solution BEFORE reading this doc.
Read through the hints one at a time (not all at once). Try to see if it helps guide your thinking.
After reading the verbal solution, work through your own examples and attempt to code it up yourself before referring to any code solutions.
Prompt

Given a binary tree, count the number of leaf nodes.
Examples

Input:
          1 
        /    \
      2       2
     / \      / \
   3   4   4   3
Output: 4 (3, 4, 4, 3 are leaf nodes)
Function Signature

def countLeafNodes(root)
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const _node3 = new TreeNode(3);
const node3_ = new TreeNode(3);
const _node4 = new TreeNode(4);
const node4_ = new TreeNode(4);

const _node2 = new TreeNode(2, _node3, node4_);
const node2_ = new TreeNode(2, _node4, node3_);
const root1 = new TreeNode(1, _node2, node2_);

//console.log(root1);

function leafNodes(root) {
    //let result = [];
    let count = 0;

    function helper(node) {
        // base case
        if(!node) return;
        // logic
        if(!node.left && !node.right) {
            count++; //result.push(node.val);
            return; // stop recursion for leaf nodes
        }
        // recursion towards base case
        helper(node.left);
        helper(node.right);
    }

    helper(root)
    return count;
    //return result;
}

function _leafNodes(node) {
    //let result = [];
    let count = 0;
    // DFS
    const stack = node ? [node] : [];

    while(stack.length) {
        // get node from stack
        const current = stack.pop();
        // check if node is leaf
        const isLeaf = !current.left && !current.right;

        // 1. leaf
        if(!current.left && !current.right) {
            //result.push(current.val);
            count += 1;
            continue;
        }
        // 2. not leaf
        //} else {
            // push children nodes into stack
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
        //}
    }
    //console.log(result);
    return count;
}

let res1 = _leafNodes(root1);
console.log(res1);
