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

function insertTargetElement(node, target, val) {
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


const LL = listNode(1, listNode(2, listNode(3, listNode(4, listNode(5)))));
const LL1 = listNode(0);
const LL4 = listNode(13, listNode(22, listNode(8, listNode(34, listNode(25)))));

console.log("\n*** TRAVERSAL NODE TESTS ***");
const r0 = countElements(LL1) === 1;
console.log(r0, ' * Should count 1 element ');
const r1 = countElements(LL) === 5;
console.log(r1, ' * Should count 5 elements ');
const r30 = sumElements(LL1) === 0;
console.log(r30, ' * Sum should total 0 ');
const r2 = sumElements(LL) === 15;
console.log(r2, ' * Sum should total 15 ');
const r20 = sumElements(LL4) === 112;
console.log(r20, ' * Sum should total 112 ');

const r3 = findMaxElement(LL) === 5;
console.log(r3, ' * Max element should be 5 ');
const r4 = findElement(LL, 3) == true;
const r5 = findElement(LL, 6) == false;
console.log(r4, ' * Should find the 3 node ');
console.log(r5, ' * Should not find the 6 node ');

const LL2 = listNode(6, listNode(7, listNode(8, listNode(9, listNode(10)))));
const LL3 = listNode(7, listNode(9, listNode(11, listNode(13, listNode(15)))));
const r6 = sumTwoLLs(LL, LL2);
const s6 = '7 -> 9 -> 11 -> 13 -> 15';
console.log(r6 === s6, ' * New LL should be sum of LL1 and LL2');

console.log("\n*** SWAP NODE TESTS ***");
const eleven = listNode(11);
append(LL2, eleven);
const r7 = LL2.next.next.next.next.next?.val;
console.log(r7 === 11, ' * Should append 11 to LL2');
removeTargetElement(LL2, 8);
const r8 = LL2.next.next.val !== 8;
console.log(r8, ' * Should remove 8 from LL2');

const node1 = listNode(1)
const node2 = listNode(1)
const node3 = listNode(1)
append(LL, node1);
append(LL, node2);
append(LL, node3);

removeAllElements(LL, 1);
const s9 = '2 -> 3 -> 4 -> 5'; 
const r9 = print(LL) === s9;
console.log(r9, ' * Should remove all 1s from LL');
insertTargetElement(LL, 8, 88);
const s10 = s9 + ' -> 8 -> 88';
const r10 = print(LL) === s10;
console.log(r10, ' * Should insert 88 after 8 node');
const s11 = '5 -> 4 -> 3 -> 2 -> 1';
reverseLL(LL);
const r11 = print(LL) === s11;
console.log(r11, ' * Should reverse LL');

console.log("\n*** DOUBLE POINTER TESTS ***");
const r12 = findMiddleElement(LL2) === 8;
console.log(r12, ' * Should return the middle element of LL');

const r13 = findKthElementFromEnd(LL3, 3) === 11;
const r14 = findKthElementFromEnd(LL2, 1) === 10;
console.log(r13, ' * Should return the 3rd element from end of LL3');
console.log(r14, ' * Should return the last element from end of LL2\n');
