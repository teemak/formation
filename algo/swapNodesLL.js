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
    let swapStart = head; //swapped node
    let swapEnd = head; //swapped node

    //let current = head;

    // moves pointer to k
    // swapStart stays at node to swap
    for(let i = 1; i < k; i++) {
        swapStart = swapStart.next;
    }
    // console.log('FIRST NODE: ', first); 4 -> 5

    let leadPointer = swapStart;

    // increment towards end
    // space between (swapEnd --- leadPointer) is k nodes
    // when leadPointer reaches end, swapEnd is k nodes from end
    while(leadPointer.next) {
        leadPointer = leadPointer.next;
        swapEnd = swapEnd.next;
    }
    //console.log('SWAP START: ', swapStart.val);
    //console.log('Pointer: ', leadPointer.val);
    //console.log('SWAP END: ', swapEnd.val);

    // swap logic
    /*let temp = swapStart.val;
    swapStart.val = swapEnd.val;
    swapEnd.val = temp;*/

    [swapStart.val, swapEnd.val] = [swapEnd.val, swapStart.val];

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

let LL2 = arrayToList([1,2,3,4,5,6,7,8,9,10,11]);
let res2 = swapNodes(LL2, 7);
console.log(JSON.stringify(res2, null, 2)); // 1 -> 2 -> 3 -> 4 -> 7 -> 6 -> 5 -> 8 -> 9 -> 10 -> 11

