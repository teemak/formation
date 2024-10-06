class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }

    toString() {
        let result = String(this.val);
        if (this.next) {
            result += ` -> ${this.next.toString()}`;
        }
        return result;
    }
}

/* Count elements in LL */
function count(node) {
    let count = 0;
    while(node) {
        node = node.next;
        count++;
    }
    return count;
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log('---- Count Elements in LL ----');
console.log(count(null), 'should match 0') // 0
console.log(count(LL1), 'should match 3') // 3
console.log(count(new ListNode()), 'should match 1') // 1

/* Append an Element to a LL */
/*function arrayify(node) {
    return -1;
}*/

function append(ll, target) {
    if(!ll) return new ListNode(target);

    let node = ll;

    while(node.next) {
        node = node.next;
    }

    node.next = new ListNode(target);
    return ll;
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log('---- Append an Element to LL ----');
let result1 = append(null, 1);
let result2 = append(LL1, 7);
let result3 = append(new ListNode(), 7);

console.log(result1.toString(), "should match 1") // [1]
console.log(result2.toString(), "should match 1 -> 4 -> 5 -> 7") // [1, 4, 5, 7]
console.log(result3.toString(), "should match 0 -> 7") // [0, 7]
/*console.log(arrayify(append(null, 1))) // [1]
console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
console.log(arrayify(append(new ListNode(), 7))) // [0, 7]*/

/* Sum Elements in a Linked List */
function sum(node) {
    let result = 0;

    while(node) {
        result += node.val;
        node = node.next;
    }

    return result;
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log('---- Sum Elements in a LL ----');
const result4 = sum(null);
const result5 = sum(LL1);
const result6 = sum(new ListNode(1));
console.log(result4, 'should return 0') // 0
console.log(result5, 'should return 10') // 10
console.log(result6, 'should return 1') // 1

/*  Find Max Element in Linked List */
function findMax(node) {
    let max = node.val;
    while(node) {
        if(node.val > max) {
            max = node.val;
        }
        node = node.next;
    }
    return max;
};

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
console.log('---- Find Max Element in LL ----');
console.log(findMax(LL1), "should return 5") // 5
console.log(findMax(LL2), "should return 7") // 7
console.log(findMax(LL3), "should return 0") // 0
console.log(findMax(new ListNode(1)), "should return 1") // 1

/*** Remove all elements with a target value in a linked list ***/
function removeElement(node, value) {
    //console.log("FUNCTION TO REMOVE RUN");
    if(!node) return node;
    const sentinel = new ListNode(0, node);
    let current = sentinel;

    while(current && current.next) {
        //console.log("CURRENT: ", current.val);
        if(current.next.val == value) {
            current.next = current.next.next;
            //console.log("MOVING CURRENT POINTER: ", current.next);
        } else {
            current = current.next;
        }
    }
    //console.log("SENTINEL NODE: ", sentinel);
    return sentinel.next ? sentinel.next : sentinel.val;
}

// Test Cases
let LL5 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))));
// var LL6 = remove(null, 1);
console.log('---- Remove All Elements of Target Value in LL ----');
console.log('Original Linked List:', LL5.toString());
const result7 = removeElement(LL5, 4);
console.log('Removing [4] returns ', result7.toString());
//console.log('Removing [4] returns LL5 ', LL5.toString());
const result8 = removeElement(LL5, 1);
console.log('**** Mutating Original LL ****');
console.log('Removing [1] returns ', result8.toString());
LL5 = removeElement(LL5, 2);
console.log('Removing [2] returns ', LL5.toString());
LL5 = removeElement(LL5, 3);
console.log('Removing [3] returns ', LL5.toString());
LL5 = removeElement(LL5, 4);
console.log('Removing [4] returns ', LL5);

// NOTE: If you're removing the head node, you need to reassign LL1 or it will still point to the old head!

/* find element in sorted linked list */
function search(head, target) {
    let curr = head;
    while(curr) {
        if(curr.val == target) {
            return true;
        }
        curr = curr.next;
    }
    return false;
}

// Test Cases
let LL4 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))
console.log('---- Find element in sorted LL ----');
console.log('Search through LL4: ', LL4.toString());
console.log('Searching through null LL for 1 should return false', search(null, 1))  
console.log('Searching through LL4 for  2 should return true    ', search(LL4, 2))       
console.log('Searching through LL4 for  4 should return false   ', search(LL4, 4))     
console.log('Searching through LL4 for -1 should return false   ', search(LL4, -1))  
console.log('Searching through LL4 for 10 should return true    ', search(LL4, 10))  
console.log('Searching through LL4 for 11 should return false   ', search(LL4, 11))

/* Insert a target element in a sorted linked list */
function insert(head, target) {
    if(!head) return new ListNode(target);
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let node = dummyHead;

    while(node) {
        if(!node.next || target < node.next.val) {
            const next = node.next;
            node.next = new ListNode(target);
            node.next.next = next;
            break;
        }
        node = node.next;
    }
    return dummyHead.next;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
var LL3 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
console.log('---- Insert target element in sorted LL ----');
let result9 = insert(LL1, 2);
let result10 = insert(LL2, -4);
let result11 = insert(LL3, 0);
let result12 = insert(null, 1);
console.log(result9.toString(), "    should match 1 -> 2 -> 3 -> 4")     // [1, 2, 3, 4]
console.log(result10.toString(), "should match -4 -> -3 -> -2 -> -1") // [-4, -3, -2, -1]
console.log(result11.toString(), " should match -3 -> -2 -> -1 -> 0")  // [-3, -2, -1, 0]
console.log(result12.toString(), "\t\t     should match 1") // [1]

/*** remove a target element from a sorted linked list ***/
function remove(head, target) {
    return -1;
}
var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
console.log('---- Remove a target element from a sorted LL ----');
/*console.log(arrayify(remove(LL1, 1))) // [-1, 3, 4]
console.log(arrayify(remove(LL1, -1))) // [3, 4]
var LL1 = remove(LL1, -1) // Notice we expect this one to return a new head!
console.log(arrayify(remove(LL1, 4))) // [3]
console.log(arrayify(remove(LL1, 5))) // [3]
console.log(arrayify(remove(new ListNode(1), 1))) // []*/

/** find the middle element from a linked list in One pass **/
function findMiddle() {
    return -1;
}

var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
var LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
console.log('---- Find the middle element from a LL One Pass ----');
console.log(findMiddle(null)) // null
console.log(findMiddle(LL1)) // 3
console.log(findMiddle(LL2)) // -13
console.log(findMiddle(LL3)) // 2
console.log(findMiddle(new ListNode(1))) // 1

/*** find the Kth element from the end of a linked list in One pass ***/
function kthFromLast(head, k) {
    return -1;
}
// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log('---- Kth From Last One Pass ----');
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3 
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1

/** Sum two linked lists of equal length **/
function sumTwoLL() {
    return -1;
}
// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
console.log('---- Sum Two Linked Lists ----');
//console.log(arrayify(sumTwoLL(LL1, LL2))) // [0, 6, -5]
//console.log(arrayify(sumTwoLL(new ListNode(0), new ListNode(0)))) // [0]

/*** reverse a linked list ***/
function reverse() {
    return -1;
}

var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log('---- Reverse Linked List ----');
/*console.log(arrayify(reverse(new ListNode(1)))) // [1]
console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverse(LL1))) // [10, 7, 3, 5, 1, 13] */
