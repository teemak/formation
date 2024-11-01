/*
'''
❓ PROMPT
Given a binary tree, return the sum of all root-to-leaf paths.

Example(s)
     1 <--- root
  2      3
4   5  6   7
sumAllTreePaths(root) == 36

Explanation:
* The leftmost path: 1 + 2 + 4 = 7
* The left-middle path: 1 + 2 + 5 = 8
* The right-middle path: 1 + 3 + 6 = 10
* The rightmost path: 1 + 3 + 7 =  11

Aggregating the paths: 7 + 8 + 10 + 11 = 36
 

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
function sumAllTreePaths(root)
def sumAllTreePaths(root: Node) -> int
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
1. get the sum at end of path
2. store sum
3. DFS
*/
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function _sumAllTreePaths(tree) {
    let result = [];

    // need helper function to store sums that get pushed to result
    function DFS(node, sum) {
        if(!node) return;

        sum += node.val;

        //  i. when leaf node push sum to result base case
        if(!node.left && !node.right) {
            result.push(sum)        
            return;
        }

        // traverse down left subtree
        DFS(node.left, sum);
        // traverse down right subtree
        DFS(node.right, sum);
    }

    DFS(tree, 0);

    //  return sum of result array
    return result.reduce((a,b) => a + b, 0);
}

function sumAllTreePaths(root, sum = 0) {
    //base case
    if(root == null) return 0;
    //update sum
    sum += root.val
    //return sum at leaf
    if(!root.left && !root.right) return sum;
    //aggregate all values
    return sumAllTreePaths(root.left, sum) + sumAllTreePaths(root.right, sum);
}

function arrToBT(arr, i = 0) {
    if(i >= arr.length || arr[i] === null) return null;

    const node = new Node(arr[i]);

    node.left = arrToBT(arr, 2 * i + 1);
    node.right = arrToBT(arr, 2 * i + 2);

    return node;
}

let in1 = arrToBT([1,2,3,4,5,6,7]);
let result = sumAllTreePaths(in1);

console.log(result);

console.log(sumAllTreePaths(null) === 0)

let oneNode = new Node(5)
console.log(sumAllTreePaths(oneNode) === 5)

//        10
//      10
//    10
//  10
let onePath = new Node(10, new Node(10, new Node(10, new Node(10))))
console.log(sumAllTreePaths(onePath) === 40)

//       1
//    2      3
//  4   5  6   7
let completeTree = new Node(1,
  new Node(2,
    new Node(4),
    new Node(5)),
  new Node(3,
    new Node(6),
    new Node(7))
)
console.log(sumAllTreePaths(completeTree) === 36)

//           30
//     20         40
//  10   25     33   60
//   15 23    32       80
let partial4levels = new Node(30,
  new Node(20,
    new Node(10,
      null,
      new Node(15)),
    new Node(25,
      new Node(23),
      null)),
  new Node(40,
    new Node(33,
      new Node(32),
      null),
    new Node(60,
      null,
      new Node(80)))
)
console.log(sumAllTreePaths(partial4levels) === 518)

//          30
//     20     40
//  10   25     60
//      23        80
let unevenTree = new Node(30,
  new Node(20,
    new Node(10),
    new Node(25,
      new Node(23))),
  new Node(40,
    null,
    new Node(60,
      null,
      new Node(80)))
)
console.log(sumAllTreePaths(unevenTree) === 368)
