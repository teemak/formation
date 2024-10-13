function listNode(val, next = null) {

    return {val, next};
}

function print(node) {
    // base case
    if(node === null) return;
    // last node only returns the value
    if(node.next === null) return `${node.val}`;

    return `${node.val} -> ${print(node.next)}`;
}

const LL = listNode(1, listNode(2, listNode(3, listNode(4, listNode(5)))));
console.log(print(LL));


/* Simple traversal with different outputs */
function countElements(node) {
    let count = 0;
    return count;
}

function sumElements(node) {
    let sum = 0;
    return sum;
}

function findMaxElement(node) {
    let max = node.val;
    return max;
}

function findElement(node) {
    return -1;
}

function sumTwoLLs(ll1, ll2) {
    return ll2;
}


/* Node swap */
function append(ll, node) {
    return ll;
}

function removeTargetElement(node, target) {
    return node;
}

function removeAllElements(node, target) {
    return node;
}

function insertTargetElement(node, target) {
    return node;
}

function reverseLL(node) {
    return node;
}


/* Double pointers */
function findMiddleElement(node) {
    let lag = node;
    return lag.val;
}

function findKthElementFromEnd(node) {
    let lead = node;
    return lead.val;
}
