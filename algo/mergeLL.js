/*
'''
🔎 EXPLORE
What are some other insightful & revealing test cases?
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
1. 3 pointers
2. a pointer - for first LL
3. b pointer - for second LL
4. c pointer - for new LL
5. compare a.val to b.val
6. higher val gets new node created with c.next pointing to null
7. save c.current 
8. move pointer for higher val
9. repeat 5 - until both a.next and b.next have a node.next of null
10. return LL
 

🛠️ IMPLEMENT
Write your algorithm. 


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

// VERBAL SOLUTION
Create helper to recursively merge lists, conditional on which value is larger (at any given call).
If second list node is larger, continue "traversing" the first list recursively by passing in node one's next pointer.
For the other case, do the opposite - but make sure to set the previous call's next value to your larger node passed in (node two). This ensures you are setting the proper nodes when you "switch sides".

// RECURSIVE SOLUTION
const mergeTwoLists = (l1, l2) => {      
    if (!l1) {
      return l2
    } else if (!l2) {
      return l1
    } else if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
    }
};

'''
*/
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }

    print() {
        let result = String(this.val);

        if (this.next) {
            result += ` -> ${this.next.toString()}`;
        }

        return result;
    }

}

let _mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;

    while(list1 !== null && list2 !== null) {

        if(list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if(list1 !== null) {
        current.next = list1;
    } else if(list2 !== null) {
        current.next = list2;
    }

    return dummy.next;
};

let list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

const mergeTwoLists = (l1, l2) => {      
    if (!l1) {
      return l2
    } else if (!l2) {
      return l1
    } else if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
    }
};

const result = mergeTwoLists(list1, list2);
console.log(JSON.stringify(result));

