/*
'''
❓ PROMPT
Given a linked list, return an array with all the elements in reverse.

Example(s)
head = 1 -> 3 -> 5 -> 2
createArrayInReverse(head) == [2,5,3,1]
 

🔎 EXPLORE
List your assumptions & discoveries:

input  = linkedListA // C -> A -> T -> S
output = ['S', 'T', 'A', 'C']

input  = linkedListB // <empty>
output = []
 

Insightful & revealing test cases:
1- empty list  => [];
2- 1 node list => [n];
3- odd/even length of linkedList => [...n]   //trivial
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n) - iterate over length n
Space: O(n) - store length n list into an array
 

📆 PLAN
Outline of algorithm #: 
1. turn linked list into an array
2. two pointers that swap in-place the values
 

🛠️ IMPLEMENT
function createArrayInReverse(node) {
def createArrayInReverse(node: Node) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// input  1 -> 3 -> 5 -> 2
// output 2 -> 5 -> 3 -> 1

class Node {
    constructor(val, next = null) {
	this.val = val;
	this.next = next;
    }
}

function reverseLL(node) {
    // prev pointer
    let prev = null;
    // current pointer
    let current = node;
    
    // iterate nodes while current is not null; when null === end
    while(current != null) {
        // need next reference so node doesn't become orphaned
        let next = current.next;
        // 1. swap current.next with prev
        current.next = prev;
        // 2. move pointers prev ->
        prev = current;
        // 3. current -> 
        current = next;
    }
    // head becomes prev
    return prev;
}

// output is an array
function createArrayInReverse(node) {
    let result = [];
    let current = node;

    while(current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result.reverse();
}

let ll = new Node(1, new Node(3, new Node(5, new Node(2))));
console.log(reverseLL(ll), 'should return 2 -> 5 -> 3 -> 1');

// 1 -> 3 -> 5 -> 2
let head = new Node(1, new Node(3, new Node(5, new Node(2))))
console.log(JSON.stringify(createArrayInReverse(head)) === JSON.stringify([2,5,3,1]))

// 4 -> 9 -> 14
head = new Node(4, new Node(9, new Node(14)))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([14,9,4]))

// 5 -> 10 -> 15 -> 20
head = new Node(5, new Node(10, new Node(15, new Node(20))))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([20,15,10,5]))

// 5
head = new Node(5)
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([5]))

// 5 -> 10
head = new Node(5, new Node(10))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([10,5]))

// 5 -> 5 -> 10 -> 10
head = new Node(5, new Node(5, new Node(10, new Node(10))))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([10,10,5,5]))

// 5 -> 5 -> 5
head = new Node(5, new Node(5, new Node(5)))
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([5,5,5]))

// 0
head = new Node(0)
console.log(JSON.stringify(createArrayInReverse(head))
=== JSON.stringify([0]))

// null
console.log(JSON.stringify(createArrayInReverse(null))
=== JSON.stringify([]))

