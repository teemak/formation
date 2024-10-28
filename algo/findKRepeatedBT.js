function TreeNode(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
}

function solution(root, k) {
    let counts = {};
    // let counts = new Map();
    // let result = [];

    // get count of occurrences
    function helper(node) {
        if(!node) return;

        /*let value = node.val;
        let count = (counts.get(node.val) || 0) + 1;
        counts.set(value, count);*/

        // init key with 0 and increment
        counts[node.val] = (counts[node.val] || 0 ) + 1;

        helper(node.left);
        helper(node.right);
    }

    helper(root)

    // return all values that occur K times
    /*for(const [val, count] of counts.entries()) {
        if(count === k) result.push(val);
    }*/
    //for(const count of Object.keys(counts)) { iterates over values
    //for(const count in counts) { iterates over keys
    //let minKey = Infinity;
    console.log('RESULTS: ', counts);
    for(const count in counts) {
        //console.log("KEY: ", count + " VALUE: " + counts[count]);
        //if(counts[count] === k) result.push(Number(count));
        //if(counts[count] === k) minKey = Math.min(minKey, Number(count));
        if(counts[count] === k) return Number(count);
    }
    //return result.length ? result[0] : -1;
    //return minKey === Infinity ? -1 : minKey;
    return -1;
}

function __solution(root, k) {
    // hashmap can have numbers as keys
    // hashmap will store count of values
    // hashmap will preserve insertion order
    let map = new Map();
    //let result = [];
    // iterate tree values
    function helper(node) {
        if(!node) return;
        // 1. store count of values in hashmap
        map.set(node.val, (map.get(node.val) || 0) + 1);
        //if(map.has(node.val)) map.set(node.val, map.get(node.val) + 1);
        //else map.set(node.val, 1)

        helper(node.left);
        helper(node.right);
    }

    helper(root);

    // 2. return the key from hashmap where value === k
    let minKey = Infinity;
    for(const [key, val] of map.entries()) {
        //if(val === k) result.push(key)
        if(val === k && key < minKey) {
            minKey = key;
        }
    }
    return minKey === Infinity ? -1 : minKey;
    // console.log(result);
    //return result.length ? Math.min(...result) : -1;
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
