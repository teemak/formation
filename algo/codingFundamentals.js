class Test {
    constructor(test_name = "", printTests = false) {
        this.total_count = 0
        this.problem_count = 0
        this.total_score = 0
        this.problem_score = 0
        this.current_problem = ""
        this.failed_problems = []
        console.log(`Beginning Test: ${test_name}`)
    }
        
    // Test Helpers
    test(expected_outcome, outcome, case_num) {
        if (expected_outcome == outcome) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    testMultipleCases(possible_outcomes, outcome, case_num) {
        var possible_outcome
        for (possible_outcome of possible_outcomes) {
            if (this.compareArrays(possible_outcome, outcome)) {
                return this.passed(case_num)
            }
        }
        return this.failed(case_num)
    }

    testForArrays(expected_outcome, outcome, case_num) {
        if (this.compareArrays(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }

    compareArrays(array1, array2) {
        return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
    }
  
    // Test Logistics
    startProblem(problemName) {
        this.current_problem = problemName
        this.problem_score = 0
        this.problem_count = 0
        this.failed_problems = []
    }
    passed(case_num) {
        this.total_score += 1
        this.problem_score += 1
        this.problem_count += 1
        this.total_count += 1
    }
    failed(case_num) {
        this.problem_count += 1
        this.total_count += 1
        this.failed_problems.push(case_num)
    }
    endProblem() {
        console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
        if (this.failed_problems.length > 0) {
            console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
        }
    }
    printFinal() {
        console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
    }
}
        
var test = new Test("Coding Fundamentals: Debugging Challenge #1")

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    var ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}

//////////////////////////////////////////////////////////////////////////////////
// 1. Insert an element into a sorted linked list (iterative)
//
// Q. Given a sorted linked list, insert an element in the appropriate position.
//    Note: You must return the head of the updated linked list.
//
// Example:
//    Given: Linked List: [1, 3, 4], target: 2
//    Updated Linked List: [1, 2, 3, 4]
//
//////////////////////////////////////////////////////////////////////////////////

function insert(head, target) {
    var curr = head 
    if (head.value > target) {
        head = new ListNode(target)
        head.next = curr
        return head
    }
    
    while (curr && curr.next) {
        if (curr.value > target) {
            var oldNext = curr.next
            curr.next = new ListNode(target)
            curr.next.next = oldNext
            return head
        }
        curr = curr.next
    }
    return head
}




// Test Cases
test.startProblem("1. Insert an Element")
var LL6 = new ListNode(1, new ListNode(3, new ListNode(4)))
var LL7 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
test.testForArrays([1, 2, 3, 4], arrayify(insert(LL6, 2)), 1)
test.testForArrays([-4, -3, -2, -1], arrayify(insert(LL7, -4)), 2)
test.testForArrays([-3, -2, -1, 0], arrayify(insert(LL7, 0)), 3)
test.testForArrays([1], arrayify(insert(null, 1)), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 2. Merge Sort
//
// Q. Given an unsorted array, perform merge sort in ascending order.
//
//////////////////////////////////////////////////////////////////////////////////

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let newArr = [];
  
  while (i < arr1.length && j < arr2.length) {
   if (arr1[i] <= arr2[j]) {
     newArr[k] = arr1[i];
     i++;
     k++;
   } else {
     newArr[k] = arr2[j];
     j++;
     k++;
   }
  }
  
  if (i === arr1.length) {
    while (j < arr2.length) {
      newArr[k] = arr2[j];
      j++;
      k++;
    }
  } else if (j === arr2.length) {
    while (i < arr1.length) {
     newArr[k] = arr1[i];
     i++;
     k++;
    }
  }
  return newArr;
}

function mergeSort(input) {
  // Write your code here.
  if (input.length < 2) {
   return input; 
  }
  
  let mid = Math.floor((input.length - 1) / 2);
  
  let leftHalf = input.slice(0, mid);
  let rightHalf = input.slice(mid);
  
  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);
  
  return merge(sortedLeft, sortedRight);
}




// Test Cases
test.startProblem("2. Merge Sort")
test.testForArrays([], mergeSort([]), 1)
test.testForArrays([1], mergeSort([1]), 2)
test.testForArrays([1, 2, 3, 4], mergeSort([3, 1, 2, 4]), 3)
test.testForArrays([-13, -10, 1, 3, 5, 8, 9, 32], mergeSort([-10, 1, 3, 8, -13, 32, 9, 5]), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 3. Reverse Linked List
//
//////////////////////////////////////////////////////////////////////////////////

function reverseLL(head) {
    // Write your code here.
    let pre = head
    while(head){
        const next = head.next
        pre = head
        head = next
    }
    return pre
}

// Test Cases
test.startProblem("3. Reverse Linked List")
let LL61 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
test.testForArrays([1], arrayify(reverseLL(new ListNode(1))), 1)
test.testForArrays([2, 1], arrayify(reverseLL(new ListNode(1, new ListNode(2)))), 2)
test.testForArrays([10, 7, 3, 5, 1, 13], arrayify(reverseLL(LL61)), 3)
test.endProblem()
test.printFinal()

