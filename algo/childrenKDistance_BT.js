/*
'''
❓ PROMPT
Given a binary tree, a target node, and integer k, return an array of all children that are k distance away from the target node.

Example(s)
           1 <--- root
    2            3
 4     5      6     7
8 9  10 11  12 13 14 15

allChildrenKDistance(root, 2, 2) == {8,9,10,11}
allChildrenKDistance(root, 6, 1) == {12,13}
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function allChildrenKDistance(root, target, k) {
def allChildrenKDistance(root: Node, target: int, k: int) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''

1. find target node, set flag
2. traverse k distance
3. return result array
*/

function allChildrenKDistance(root, target, k) {

    // need to pass parent node state and distance
    function kdistance(node, depth = 0, found = false) {
        // base case
        if(!node) return [];

        // 1. find parent
        if(node.val === target) found = true;
        // 3. check for distance from parent and parent state
        // children nodes of parent
        if(depth === k && found) return [node.val]
        // 2. need to find distance from parent node
        // parent traversal from K
        if(found) depth += 1

        // 4. result array
        return kdistance(node.left, depth, found).concat(kdistance(node.right, depth, found))
    }

    return kdistance(root)
}
 
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function arrToBT(arr, idx = 0) {
    // base case
    if(idx > arr.length) return null;

    // initial node
    const node = new Node(arr[idx]);

    // recursive call towards base case
    node.left = arrToBT(arr, 2 * idx + 1);
    node.right = arrToBT(arr, 2 * idx + 2);

    return node;
}

let tree1 = arrToBT([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
let result1 = allChildrenKDistance(tree1,2,2) // [8,9,10,11]

console.log(result1);


