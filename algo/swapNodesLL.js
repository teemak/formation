/*
'''
Swapping Nodes in a Linked List

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
 

EXAMPLE(S)
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 

FUNCTION SIGNATURE
def swapNodes(self, head: ListNode, k: int) -> ListNode:
'''
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapNodes(head, k) {
    let first = head;
    let last = head;

    //let current = head;

    // moves pointer to k
    for(let i = 1; i < k; i++) {
        first = first.next;
    }
    // console.log('FIRST NODE: ', first); 4 -> 5

    let twin = first;
    while(twin.next !== null) {
        twin = twin.next;
        last = last.next;
    }

    // swap logic
    let temp = first.val;
    first.val = last.val;
    last.val = temp;

    return head;
}

function arrayToList(arr) {
    // initialize first LL node
    let head = new ListNode(arr[0]);
    // establish a head
    let current = head;

    // iterate from 1
    for(let i = 1; i < arr.length; i++) {
        // create LL node for next val
        current.next = new ListNode(arr[i]);
        // move pointer
        current = current.next;
    }
    // return LL
    return head;
}

let LL1 = arrayToList([1,2,3,4,5]);
let res1 = swapNodes(LL1, 4);
console.log(JSON.stringify(res1, null, 2)); // 1 -> 4 -> 3 -> 2 -> 5

