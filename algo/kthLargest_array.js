/*
'''
❓ PROMPT
Given an array of integers and an integer K, find the Kth largest value in the array. You can assume that K is always smaller than the length of the array.

Example(s)
findKthLargest([3,2,1,5,6,4], 2) == 5
findKthLargest([1,1,5,3,2,9], 4) == 2
 

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
function findKthLargest(nums, k) {
def findKthLargest(nums: list[int], k: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
[1,2,3,4,5,6]
k = 2
output = 5

[1,1,5,3,2,9]
k = 4
output = 2

       x
[1,1,5,3,2,9]

i.   1
ii.  1
iii. 5
iv.  3
v.   2
vi.  9

// keep result array of length K - return result[0]
      1      1      5      3      2      9
[null, 1], [1,1], [1,5], [3,5], [3,5], [5,9] 
LOGIC TO INSERT INTO RESULT

1. check prev value < current value < next value
2. check if new value can be pushed
    i.   if null insert at idx
    ii.  if current value is greater than min insert
    iii. check prev value < current value < next value
    vi.  check if it's min value
3. insert into correct index

// object
// {
//   first:  x,
//   second: y,
//   third:  z,
//   fourth: a,
// }

edge cases:
1. what about ties?
2. range of k
*/

/*
 * keep adding elements to heap
 * heap keeps sorting
 * keep heap size to K elements
 * return the heap[0] because elements are ascending order
 */
function findKthLargest(nums, k) {
    let minHeap = [];

    function addHeap(num) {
        minHeap.push(num);
        // 2. sort heap O(k*logK)
        minHeap.sort((a,b) => a - b);

        // 3. keep size of heap === K
        // always remove the min element when size is larger than K
        if(minHeap.length > k) minHeap.shift();
    }

    // 1. keep adding elements to heap
    for(let num of nums) {
        addHeap(num);
    }

    // 4. return
    return minHeap[0];
}

// run: O(n * logK) - input array * sort
// space: O(k) - size of heap

console.log(findKthLargest([1, 1, 5, 3, 2, 9], 4)) // 2
//console.log(findKthLargest([3,2,1,5,6,4], 2)); // Output: 5

console.log(findKthLargest([10], 1) === 10);
console.log(findKthLargest([15, 15, 15], 2) === 15);

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2) === 5);
console.log(findKthLargest([1, 1, 5, 3, 2, 9], 4) === 2);

console.log(findKthLargest([10, 20, 30, 40], 3) === 20);
console.log(findKthLargest([10, 20, 30, 40], 2) === 30);
console.log(findKthLargest([10, 20, 30, 40], 1) === 40);

console.log(findKthLargest([40, 30, 20, 10], 3) === 20);
console.log(findKthLargest([40, 30, 20, 10], 2) === 30);
console.log(findKthLargest([40, 30, 20, 10], 1) === 40);

console.log(findKthLargest([4, 2, 3, 4, 1, 6], 1) === 6);
console.log(findKthLargest([4, 2, 3, 4, 1, 6], 2) === 4);
console.log(findKthLargest([4, 2, 3, 4, 1, 6], 3) === 4);

/*
const heapq = require('heapq');

function __findKthLargest(nums, k) {
  // minheap
  let heap = nums.slice(0, k)
  heapq.heapify(heap)
  
  for (let n of nums.slice(k))
    heapq.heappushpop(heap, n)

  return heap[0]
}
*/
