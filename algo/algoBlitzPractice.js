class ListNode {
    constructor(val, next = null) {
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
function count() {
    return -1;
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log('---- Count Elements in LL ----');
console.log(count(null)) // 0
console.log(count(LL1)) // 3
console.log(count(new ListNode())) // 1

/* Append an Element to a LL */
function arrayify(node) {
    return -1;
}

function append(node) {
    return -1;
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log('---- Append an Element to LL ----');
console.log(arrayify(append(null, 1))) // [1]
console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
console.log(arrayify(append(new ListNode(), 7))) // [0, 7]

/* Sum Elements in a Linked List */
function sum() {
    return -1;
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log('---- Sum Elements in a LL ----');
console.log(sum(null)) // 0
console.log(sum(LL1)) // 10
console.log(sum(new ListNode(1))) // 1

/*  Find Max Element in Linked List */
function findMax() {
    return -1;
};

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
console.log('---- Find Max Element in LL ----');
console.log(findMax(LL1)) // 5
console.log(findMax(LL2)) // 7
console.log(findMax(LL3)) // 0
console.log(findMax(new ListNode(1))) // 1

/*** Remove all elements with a target value in a linked list ***/
function remove() {
    return -1;
}

// Test Cases
var LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
var LL2 = remove(null, 1);
console.log('---- Remove All Elements of Target Value in LL ----');
console.log(arrayify(LL2)) // []
LL1 = remove(LL1, 1);
console.log(arrayify(LL1)) // [4, 2, 3, 2, 2] 
LL1 = remove(LL1, 2);
console.log(arrayify(LL1)) // [4, 3]
LL1 = remove(LL1, 3);
console.log(arrayify(LL1)) // [4]
LL1 = remove(LL1, 4);
console.log(arrayify(LL1)) // []

// NOTE: If you're removing the head node, you need to reassign LL1 or it will still point to the old head!

/* find element in sorted linked list */
function search() {
    return -1;
}

// Test Cases
let LL4 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))
console.log('---- Find element in sorted LL ----');
console.log(search(null, 1)) // false
console.log(search(LL4, 2)) // true
console.log(search(LL4, 4)) // false
console.log(search(LL4, -1)) // false
console.log(search(LL4, 10)) // true
console.log(search(LL4, 11)) // false

/* Insert a target element in a sorted linked list */
function insert() {
    return -1;
}
// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
console.log('---- Insert target element in sorted LL ----');
console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
console.log(arrayify(insert(null, 1))) // [1]

/*** remove a target element from a sorted linked list ***/
function remove(head, target) {
    return -1;
}
var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
console.log('---- Remove a target element from a sorted LL ----');
console.log(arrayify(remove(LL1, 1))) // [-1, 3, 4]
console.log(arrayify(remove(LL1, -1))) // [3, 4]
var LL1 = remove(LL1, -1) // Notice we expect this one to return a new head!
console.log(arrayify(remove(LL1, 4))) // [3]
console.log(arrayify(remove(LL1, 5))) // [3]
console.log(arrayify(remove(new ListNode(1), 1))) // []

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
console.log(arrayify(sumTwoLL(LL1, LL2))) // [0, 6, -5]
console.log(arrayify(sumTwoLL(new ListNode(0), new ListNode(0)))) // [0]

/*** reverse a linked list ***/
function reverse() {
    return -1;
}

var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log('---- Reverse Linked List ----');
console.log(arrayify(reverse(new ListNode(1)))) // [1]
console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverse(LL1))) // [10, 7, 3, 5, 1, 13]
