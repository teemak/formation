/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
edge cases: 
1. empty array
2. negative values
3. data type
4. single array
5. is it a balanced BST?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: DFS
0. need to find midpoint of values so that it will be head of BST
1. traverse array creating/adding nodes

Algorithm 2: bottom up because left node will always be lowest and right element from input is max
 l r R r r.l r.r
[1,2.3,4,5,6]
 
         3
 1    n     n      4
n  2             5   6

Time: O(n) - length of array input
Space: O(n) - number of elements

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
Write your algorithm.
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
class TreeNode {
    constructor(val, left =null, right = null) {
        this.val = val;
        this.left = left; 
        this.right = right;
    }
}

// 1. validate input
// 2. find middle index
// 3. split into 3 sections, index by [left][root][right]
// 4. base case is when the start > end, i > middle
// 5. create new node for root each time
// 6. recursively call function towards base case
// 7. return root
function arrayToBST(nums) {
    // validate input
    if(!nums.length) return null;

    function helper(start, end) {
        // base case
        if(start > end) return null;
        //if(end === 0) return null;

        // find middle index for root node - a[3] a[1]
        const middle = Math.floor((start + end) / 2);
        // const middle = start + Math.floor(end/2);
        // first middle is [4], then [2], 
        const root = new TreeNode(nums[middle]);

        // traverse left - [0, middle] first half of input
        root.left = helper(start, middle - 1);
        // root.left = helper(start, middle - start) // [1,2,3] => [1] gets assigned to parent by recursive call
        // traverse right - [middle+1, end] second half of array
        root.right = helper(middle + 1, end)
        // root.right = helper(middle + 1, end - (middle - start + 1))

        return root;
    }

    return helper(0, nums.length - 1);
}

let result1 = arrayToBST([1,2,3,4,5,6,7]);
console.log(JSON.stringify(result1, null, 2));


