/*
'''
❓ PROMPT
Given a linked list, return the node one-third of the way through the list.

Example(s)
1 → 2 → 3 returns 1
1 → 2 → 3 → 4 returns 2
1 → 2 → 3 → 4 → 5 → 6 returns 2
 

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
function oneTfindOneThirdElement(head)
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
/*
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function _findOneThirdElement(head) {
    if(!head) return null;

    let length = 0;
    let current = head;

    while(current) {
        length++;
        current = current.next;
    }

    const oneThirdIdx = Math.floor(length / 3);
    current = head;

    for(let i = 0; i < oneThirdIdx; i++) {
        current = current.next;
    }

    return current;
}

function createLinkedList(arr) {
    if(arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for(let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

const testCases = [
    [], // Edge case: empty list
    [1], // Single node
    [1, 2], // Two nodes
    [1, 2, 3], // Three nodes
    [1, 2, 3, 4], // Four nodes
    [1, 2, 3, 4, 5, 6] // Six nodes
];

testCases.forEach(arr => {
    const head = createLinkedList(arr);
    const result = findOneThirdElement(head);
    console.log(result ? result.value : null); // Output the result
});

function findOneThirdElement(head) {
    let slow = head;
    let fast = head;

    while(fast) {
        fast = fast?.next?.next?.next;

        if(fast) {
            slow = slow.next;
        }
    }

    return slow ? slow.val : undefined;
}
*/

// Node definition
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function _findOneThirdElement(head) {
    let slow = head;
    let fast = head;

    // Traverse the list with slow and fast pointers
    while (fast && fast.next && fast.next.next) {
        slow = slow.next; // Move slow pointer by 1
        fast = fast.next.next.next; // Move fast pointer by 3
    }

    return slow ? slow.value : undefined; // Return the value of the slow pointer or null
}

function findOneThirdElement(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next.next;
    }

    return slow ? slow.val : undefined;
}

console.log(findOneThirdElement(null) === undefined);
console.log(findOneThirdElement(new ListNode(1)) === 1);
console.log(findOneThirdElement(new ListNode(1, new ListNode(2))) === 1);
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))) === 2);
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))) === 2);
console.log(findOneThirdElement(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9)))))))))) === 4);
