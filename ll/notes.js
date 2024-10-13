class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }

    toPrint() {
        let result = String(this.val);

        if(this.next) {
            result += ` -> ${this.next.toPrint()}`; // recursively call function
        }
        return result;
    }
}


const dummy = new ListNode(0);
const sentinel = new ListNode(0);

const LL = new ListNode(1, new ListNode(88, new ListNode(92, new ListNode(13, new ListNode(14, new ListNode(50))))));
const LL2 = new ListNode(88, new ListNode(10, new ListNode(12, new ListNode(23, new ListNode(44, new ListNode(25))))));
const LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
LL.next.next.next.next.next = LL2;
// LL.next = new ListNode(2, null);

// console.log(LL);

// At last node
// if(cur.next == null)

// Next node exists
// if(cur.next !== null)

/*
function ListNode(val) {
    this.val = val;
    this.next = null;
}
*/
function reverseLL(head) {
    let prev = null;
    let cur = head;

    while(cur) {
        [cur.next, prev, cur] = [prev, cur, cur.next];
        // [cur.next, cur, prev] = [prev, cur.next, cur]
        /*
        let nextNode = cur.next; // save next node
        cur.next = prev; // reverse the LL
        prev = cur; // move prev forward
        cur = nextNode; // move cur forward
        */
    }
    return prev;
}

function count(head) {
    let count = 0; // increment each traversal
    let node = head; // current node

    while(node) {
        // increment count if node
        count += 1;
        // moves pointer
        node = node.next;
    }
    // returns node amount
    return count;
}

function findMax(node) {
    // set initial highest val
    let result = node.val;
    let current = node.next;

    while(current) {
        // check if current.val > greatestSoFar
        if(current.val > result) {
            // set highest
            result = current.val;
        }
        // move pointer
        current = current.next;
    }
    return result;
}

function sumElements(node) {
    let sum = 0;

    while(node) {
        // keep running sum
        sum += node.val;
        // move pointer
        node = node.next;
    }
    return sum;
}

function append(head, target) {
    let current = head;
    // traverse to end and make current
    while(current.next) {
        current = current.next;
    }
    // at end of LL, add node
    current.next = new ListNode(target);
    return head;
}

// how to handle consecutive targets
function removeAllElements(node, target) {
    // sentinel nodes are needed for removing head nodes
    const sentinel = new ListNode(0, node);
    let current = sentinel;

    // traverse linked list, only if there is a next node
    while(current.next) { 
        // check next node's value with target
        if(current.next.val === target) {
            // next node value matches target
            // move pointer of current -> x -> y
            // skips x and sets y as next
            current.next = current.next.next;
        } else {
            // else move pointer
            current = current.next;
        }
    }
    // return the original LL
    return sentinel.next;
}

function findElement(node, target) {
    // traverse LL
    while(node) {
        // check node.val === target ? return node.val : move pointer
        if(node.val === target) return true;
        node = node.next;
    }
    return false;
}

function insertElement(head, target, node) {
    let current = head;
    // traverse
    while(current) {
        if(current.val === target) {
            let temp = current.next;
            current.next = node; 
            node.next = temp;
            return; // break function on first insert
        }
        current = current.next;
    }
    return head;
}

function findMiddleLL(node) {
    let lagPointer = node;
    let leadPointer = node; // moves twice as fast

    while(leadPointer.next && leadPointer.next.next) {
        lagPointer = lagPointer.next; // move pointer to next node
        leadPointer = leadPointer.next.next; // move pointer two nodes
    }

    return lagPointer.val;
}

// find Kth element from end of LL
function findKthElement(node, k) {
    let lag = node;
    let lead = node;

    for(let i = 0; i < k; i++) {
        if(lead) {
            lead = lead.next;
        } else {
            return -1;
        }
    }

    while(lead) {
        lag = lag.next;
        lead = lead.next;
    }

    return lag.val;
}

// must be of equal length
function sumTwoLL(LL1, LL2) {
    let sentinel = new ListNode(0);
    let current = sentinel, h1 = LL1, h2 = LL2;

    while(h1) {
        current.next = new ListNode(h1.val + h2.val);
        current = current.next;
        h1 = h1.next;
        h2 = h2.next;
    }

    return sentinel.next;
}

console.log('Functions: \n1.  countElements*\n2.  append*\n3.  sumElements*\n4.  findMax*\n5.  removeAllTargetElements\n6.  findElement \n7.  insertElement*\n8.  findMiddle \n9.  findKthElement \n10. sumTwoLL \n11. removeTargetElement\n12. reverseLL\n');
console.log(LL.toPrint());
// mutates original LL
//let r1 = reverseLL(LL);
//console.log(r1.toPrint());
//console.log(count(r1));
//console.log(findMax(LL));
//console.log(sumElements(LL));
append(LL, 88);
append(LL, 88);
console.log(LL.toPrint());
console.log('COUNT: ', count(LL));
removeAllElements(LL, 88);
console.log('REMOVED ELEMENTS COUNT: ', count(LL));
console.log(LL.toPrint());
console.log('FIND 14 IN LL');
console.log(findElement(LL, 14));
console.log('INSERT 18 AFTER 10');
const eightTeen = new ListNode(18);
insertElement(LL, 10, eightTeen);
append(LL, 88);
console.log(LL.toPrint());
console.log(findMiddleLL(LL));
console.log(findKthElement(LL,8));
console.log('LL2: ', LL2.toPrint());
append(LL3, 7);
append(LL3, 8);
console.log('LL3: ', LL3.toPrint());
console.log('LL4: ', sumTwoLL(LL2, LL3).toPrint());
