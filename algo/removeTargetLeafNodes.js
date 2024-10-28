/*
Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).

 

Example 1:

Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).
Example 2:



Input: root = [1,3,3,3,2], target = 3
Output: [1,3,null,null,2]
Example 3:



Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.
 

Constraints:

The number of nodes in the tree is in the range [1, 3000].
1 <= Node.val, target <= 1000
*/

function solution(root, target) {
    if(!root) return null;

    const stack = [[root, false]]; // hold node and visited
    const parentMap = new Map(); // track parents for node deletions

    while(stack.length > 0) {
        const [node, visited] = stack.pop();

        if(!node) continue;

        if(visited) {
            if(!node.left && !node.right && node.val === target) {
                const parent = parentMap.get(node);
            
                if(parent) {
                    if(parent.left === node) parent.left = null;
                    if(parent.right === node) parent.right = null;
                }
            }
        } else {
            stack.push([node, true]);
            if(node.right) {
                stack.push([node.right, false]);
                parentMap.set(node.right, node);
            } 
            if(node.left) {
                stack.push([node.left, false]);
                parentMap.set(node.left, node);
            } 
        }
    }

    return (!root.left && !root.right && root.val === target) ? null : root;
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

//let t1 = new TreeNode(1, new TreeNode(3, new TreeNode(3), new TreeNode(2)),new TreeNode(3));
//console.log(JSON.stringify(solution(t1, 2), null, 2));

function arrToBT(arr) {
    let root = new TreeNode(arr[0]);
    const queue = [root];
    
    let i = 1;
    
    while(i < arr.length) {
        const current = queue.shift();
        if(arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if(i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
} 

let t2 = [1,2,3,2,null,2,4], target2 = 2;
t2 = arrToBT(t2);
console.log(t2);
//let res2 = solution(t2, target2);
//console.log(JSON.stringify(res2)); // [1, null, 3, null, 4]
//

