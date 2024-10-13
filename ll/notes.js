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

const LL = new ListNode(1, new ListNode(92, new ListNode(13, new ListNode(14, new ListNode(50)))));
const LL2 = new ListNode(10, new ListNode(12, new ListNode(23, new ListNode(44, new ListNode(25)))));
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

console.log(LL.toPrint());
// mutates original LL
//let r1 = reverseLL(LL);
//console.log(r1.toPrint());
//console.log(count(r1));
console.log(findMax(LL));

