/*
'''
❓ PROMPT
Given a linked list and a positive number, *k*, reverse *k* items in the list at a time and reverse the remaining fragment if any.

Example(s)
            k
head = 1 -> 2 -> 3
reverseBlocks(head, 2) == "2 -> 1 -> 3"

                 k
head = 1 -> 2 -> 3 -> 4 -> 5 -> 6
reverseBlocks(head, 3) == "3 -> 2 -> 1 -> 6 -> 5 -> 4"
 
            k
head = 1 -> 2 -> 3 -> 4 -> 5 -> 6
reverseBlocks(head, 2) == "2 -> 1 -> 4 -> 3 -> 6 -> 5"

                 k
head = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
reverseBlocks(head, 3) == "3 -> 2 -> 1 -> 6 -> 5 -> 4 -> 7"

🔎 EXPLORE
List your assumptions & discoveries:
1. k becomes new head 
2. basic reverse LL
3. what happens at original head? no reference to tail?
4. what parameters does the class have? val, next, head, tail
5. what is k? It is the kth node at 1 based index
6. Can K be greater than length of LL? yes, then start at closest available, 
if k = 9 and LL is 6 elements then start at 6th element. Reverse the entire list
7. k represents the block size that needs to be reversed
8. output is string of node's values
9. k divides blocks of linked lists, if k doesn't divide evenly reverse whatever remains


Insightful & revealing test cases:
1. empty list                           => ""
2. 1 node list                          => return original
3. k === list.length || k > list.length => reverse linked list
4.  

🧠 BRAINSTORM
What approaches could work?
1. k will divide ll into blocks
2. reverse ll by blocks
3. 

Algorithm 1:
Time: O(n) - based on length of linked list, N is amount of nodes
Space: O(1) - constant number of pointers, can be done in place

Space: O(k) - recursively grow the call stack
 

📆 PLAN
Outline of algorithm #: 
1. tracking 3 positions while iterating through the list
    a. pointer to last node of previous block (sentinel node)
    b. pointer to first node, so we can connect new block to previous
    c. pointer to remainder of the list after the block is reversed
 

🛠️ IMPLEMENT
function reverseBlocks(head, k) {
def reverseBlocks(head: Node, k: int) -> Node:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
/*
    Insightful & revealing test cases:
    1. empty list                           => ""
    2. 1 node list                          => return original
    3. k === list.length || k > list.length => reverse linked list
*/

/*
// recursive
function reverseBlocks(node, k) {
    if(!node || !node.next || k === 1) return node;

    let prev = head;
    let curr = prev.next;
    prev.next = null;

    let last = prev;
    let count = 1;

    while(curr && count < k) {
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
        count++;
    }

    if(current) {
        last.next = reverseBlocks(current, k);
    }
    return prev;
};
*/

// iterative
function reverseBlocks(node, k) {

    // reverse linked list in blocks of size k
    function reverseOneBlock(head, k) {
        if(!head || !head.next) return [head, head, null];

        // new head of reversed LL
        let a = head;
        let b = head.next; // next node after k blocks
        a.next = null;
        // new head of reversed LL
        let last = a;
        let count = 1;


        while(b && count < k) {
            const temp = b.next;
            b.next = a;
            a = b;
            b = temp;
            count++;
        }
        return [a, last, b];
    } // end of helper function

    if(k === 1) return node;
    const dummy = new Node(0);
    let last = dummy;
    let remainder = node;

    //console.log("REMAINDER: ", remainder);
    while(remainder) {
        const [f, l, r] = reverseOneBlock(remainder, k);
        last.next = f;
        last = l
        remainder = r;
    }

    return dummy.next;
}

function toString(head) {
  if (!head)
    return "<empty>"

  let parts = []
  while(head) {
    parts.push(head.val)
    head = head.next
  }

  return parts.join(" -> ")
}

console.log(toString(reverseBlocks(null, 1)) == "<empty>", "should match <empty>");
console.log(toString(null), "\n");

let head = new Node(1) // 1
console.log(toString(reverseBlocks(head, 1)) == "1", "should match 1");
console.log(toString(head), "\n");

head = new Node(1) // 1
console.log(toString(reverseBlocks(head, 9)) == "1", "should match 1")
console.log(toString(head), "\n");

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(reverseBlocks(head, 1)) == "1 -> 2 -> 3", "should match 1 -> 2 -> 3");
console.log(toString(head), "\n");

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(head), "-----\n");
console.log(toString(reverseBlocks(head, 2)) == "2 -> 1 -> 3", "should match 2 -> 1 -> 3")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(head), "\n");
console.log(toString(reverseBlocks(head, 3)) == "3 -> 2 -> 1 -> 6 -> 5 -> 4", "should match 3 -> 2 -> 1 -> 6 -> 5 -> 4")

// 5 -> 6 -> 9
head = new Node(5, new Node(6, new Node(9)))
console.log(toString(head), "\n");
console.log(toString(reverseBlocks(head, 3)) == "9 -> 6 -> 5", "should match 9 -> 6 -> 5")

// 2 -> 2 -> 2
head = new Node(2, new Node(2, new Node(2)))
console.log(toString(head), "\n");
console.log(toString(reverseBlocks(head, 2)) == "2 -> 2 -> 2", "should match 2 -> 2 -> 2")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(head), "\n");
console.log(toString(reverseBlocks(head, 2)) == "2 -> 1 -> 4 -> 3 -> 6 -> 5", "should match 2 -> 1 -> 4 -> 3 -> 6 -> 5")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 4)) == "4 -> 3 -> 2 -> 1 -> 6 -> 5", "should match 4 -> 3 -> 2 -> 1 -> 6 -> 5")
console.log(toString(head), "\n");

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 5)) == "5 -> 4 -> 3 -> 2 -> 1 -> 6", "should match 5 -> 4 -> 3 -> 2 -> 1 -> 6")
console.log(toString(head), "\n");

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 5)) == "5 -> 4 -> 3 -> 2 -> 1 -> 6")
console.log(toString(head), "\n");

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 6)) == "6 -> 5 -> 4 -> 3 -> 2 -> 1")
console.log(toString(head), "\n");

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 9)) == "6 -> 5 -> 4 -> 3 -> 2 -> 1")
console.log(toString(head), "\n");
