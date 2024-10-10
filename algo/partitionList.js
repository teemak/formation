/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    let left = [];
    let right = [];
    while(head){
        if(head.val < x){
            left.push(head.val);
        }else{
            right.push(head.val)
        }
        head = head.next;
    }
    
    head = null;

    while(right.length !== 0){
        let node = new ListNode(right.pop());
        node.next = head;
        head = node;
    }

    while(left.length !== 0){
        let node = new ListNode(left.pop());
        node.next = head;
        head = node;
    }

    return head;
};

var partition = function(head, x) {
    let leftLL = new ListNode(0)
    let rightLL = new ListNode(0)
    let left = leftLL;
    let right = rightLL;
    let current = head;

    while(current != null) {
        if(current.val < x) {
            left.next = current;
            left = left.next;
        } else {
            right.next = current;
            right = right.next; 
        }
        current = current.next;
    }
    right.next = null;
    left.next = rightLL.next;

    return leftLL.next;
};
