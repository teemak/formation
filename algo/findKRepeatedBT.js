function TreeNode(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
}

function solution(root, k) {
    let counts = {};
    // let counts = new Map();
    let result = [];

    // get count of occurrences
    function helper(node) {
        if(!node) return;

        /*let value = node.val;
        let count = (counts.get(node.val) || 0) + 1;
        counts.set(value, count);*/

        counts[node.val] = (counts[node.val] || 0 ) + 1;

        helper(node.left);
        helper(node.right);
    }

    helper(root)

    // return all values that occur K times
    /*for(const [val, count] of counts.entries()) {
        if(count === k) result.push(val);
    }*/
    for(const count in counts) {
        console.log("KEY: ", count + " VALUE: " + counts[count]);
        if(counts[count] === k) result.push(Number(count));
    }
    console.log('RESULTS: ', result);
    return result.length ? result[0] : -1;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(3);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(3);

const root3 = new TreeNode(1);
root3.left = new TreeNode(4);
root3.left.left = new TreeNode(3);
root3.left.right = new TreeNode(2);
root3.right = new TreeNode(4);
root3.right.left = new TreeNode(2);
root3.right.right = new TreeNode(3);

const root4 = new TreeNode(1);

const k = 2;
console.log(solution(root, k));  // Output: 2
console.log(solution(root2, k));  // Output: 2
console.log(solution(root3, 2));  // Output: -1
console.log(solution(root4, 4));  // Output: -1
