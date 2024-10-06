const ListNode = require('../ds/LinkedList.js');

let boston = new ListNode('Boston', null);
let providence = new ListNode('Providence', boston);
let cranston = new ListNode('Cranston', providence);
let warwick = new ListNode('Warwick', cranston);
let seekonk = new ListNode('Seekonk', warwick);
let attleboro = new ListNode('Attleboro', seekonk);
let lowell = new ListNode('Lowell', attleboro);
let head = new ListNode('New York', lowell);

//console.log('Lowell Linked List:\n', lowell.toString());

function countIterative(ll) {
    // initialize counter
    let count = 0;
    // current node is the ll node
    let node = ll;

    // 1. iterate node
    // 2. move next pointer
    // 3. increment count
    while(node) {
        // console.log(node.value);
        // move next pointer
        node = node.next;
        // increment count
        count += 1;
    }

    return count;
}

// uses more memory
// can be difficult to debug
function countRecursive(ll) {
    // console.log("CURRENT NODE: ", ll);
    // base case - end of ll
    if(!ll) {
        return 0;
    } else {
        // every function call will increase counter by 1
        // boston => 1
        // providence => 2
        // ...
        // lowell => 7
        return countRecursive(ll.next) + 1;
    }
}

console.log(head.toString());
console.log(countRecursive(head));
//console.log(countRecursive(lowell));
