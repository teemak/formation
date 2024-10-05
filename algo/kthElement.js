/*
'''
❓ PROMPT
Given a linked list and a target k, return a linked list containing every kth element.

Example(s)
head = 1 -> 3 -> 6 -> 2 -> 8 -> 9
everyKthNode(head, 3) == "6 -> 9"
 

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
function everyKthNode(node, target) {
def everyKthNode(node: Node, target: int) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

/* My Implementation
 *
class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function arrayToList(arr) {
	let dummy = new ListNode(0);
	let current = dummy;
	for (let num of arr) {
		current.next = new ListNode(num);
		current = current.next;
	}
	return dummy.next;
}

function everyKthNode(node, k) {
	let dummy = new ListNode(0);
	let newList = dummy;
	let counter = 1;

	while(node != null) {
		if(counter % k === 0) {
			newList.next = new ListNode(node.val);
			newList = newList.next;
		}
		node = node.next
		counter++;
	}

	return dummy.next;
}

function printList(head) {
	let result = [];
	while(head) {
		result.push(head.val);
		head = head.next;
	}
	return result.join(" -> ");
}
*/

/* Formation Implementation */
class Node {
    constructor(val, next = null) {
	this.val = val;
	this.next = next;
    }
}

function everyKthNode(node, target) {
    if(node == null || target == 0) {
	return null;
    }
    let dummy = new Node('dummy', null);
    let p1 = dummy;
    let counter = 0;
    let current = node;

    while(current != null) {
	counter += 1;
	if(counter % target == 0) {
	    let newNode = new Node(current.val, null)
	    p1.next = newNode;
	    p1 = p1.next;
	}
	current = current.next;
    }
    return dummy.next;
}

function toString(head) {
    if(!head) return "<empty>";
    
    let parts = [];
    while(head) {
	parts.push(head.val);
	head = head.next;
    }

    return parts.join(" -> ");
};

// 1 -> 3 -> 6 -> 2 -> 8 -> 9
let head = new Node(1, new Node(3, new Node(6, new Node(2, new Node(8, new Node(9))))))
console.log(toString(everyKthNode(head, 3)) == "6 -> 9")
console.log(toString(everyKthNode(head, 1)) == "1 -> 3 -> 6 -> 2 -> 8 -> 9")
console.log(toString(everyKthNode(head, 5)) == "8")
console.log(toString(everyKthNode(head, 6)) == "9")
console.log(toString(everyKthNode(head, 7)) == "<empty>")

// 6
head = new Node(6)
console.log(toString(everyKthNode(head, 1)) == "6")
console.log(toString(everyKthNode(head, 20)) == "<empty>")

// 6 -> 12
head = new Node(6, new Node(12))
console.log(toString(everyKthNode(head, 1)) == "6 -> 12")
console.log(toString(everyKthNode(head, 2)) == "12")
console.log(toString(everyKthNode(null, 5)) == "<empty>")

/* my tests
let head1 = arrayToList([1, 3, 6, 2, 8, 9]);
let head2 = arrayToList([1]);
let head3 = arrayToList([1, 2, 3]);
let head4 = arrayToList([1, 2, 3, 4, 5, 6]);

console.log(printList(everyKthNode(head1, 3)));  // Expected Output: "6 -> 9"
console.log(printList(everyKthNode(head2, 1)));  // Expected Output: "1"
console.log(printList(everyKthNode(head3, 4)));  // Expected Output: ""
console.log(printList(everyKthNode(head4, 2)));  // Expected Output: "2 -> 4 -> 6"
*/
