const html = `
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="main.js" defer></script>
</head>
<pre>
Strings, arrays, linked lists, and trees are examples of recursive data structures.

1. Strings are either 0 characters, 1 character, or a character with other characters.
2. Arrays are either empty, 1 element, or 1 element with another array.
3. LinkedLists are either empty, 1 node, or 1 node with another list.
4. Trees are either empty, 1 node, or 1 node with other trees.
</pre>
</html>
`

// a string is composed of any combination of smaller strings
let str = "2468";
// 2 + 468
// 24 + 68
// 246 + 8
// 2 + 4 + 68
// 2 + 4 + 6 + 8


// an array is composed of any combination of smaller arrays
//let arr = [2, 4, 6, 8];
// [2] + [4,6,8]
// [2,4] + [6,8]
// [2,4,6] + [8]
// [2] + [4] + [6,8]
// [2] + [4] + [6] + [8]


class LinkedListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

}


// a linked list is composed of smaller linked lists
// 2 -> 4 -> 6 -> 8
let head = new LinkedListNode(2, new LinkedListNode(4, new LinkedListNode(6, new LinkedListNode(8))));
// 2 is a node pointing to a node starting with 4
// 4 is a node pointing to a node starting with 6
// 6 is a node pointing to a node starting with 8
// 8 is a node pointing to an empty node


class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

}

// a tree is composed of smaller trees
//    2
//  4  6
//      8
let root = new BinaryTreeNode(2);
let left = new BinaryTreeNode(4);
let right = new BinaryTreeNode(6);
root.left = left;
root.right = right;
right.right = new BinaryTreeNode(8);
// 2 is a tree with a left tree starting with 4 and a right tree starting with 6
// 4 is a tree with no other trees
// 6 is a tree with no left tree and a right tree starting with 8
// 8 is a tree with no other trees

/*
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="main.js" defer></script>
</head>
<body>
  
  Original = [ <div id="animalsBefore"></div> ]
  
  <br/>
  <br/>
  
  Sliced = [<div id="animalsSlice"></div> ]
  
  <br/>
  <br/>
  
  After modifying sliced = [ <div id="animalsSlicedUpdate"></div> ]
  
  <br/>
  <br/>
  
  After modifying directly = [ <div id="animalsUpdate"></div> ]
  
</body>
</html>

SPECIAL CASE FOR ARRAYS - slice uses more memory, it creates a subset copy, duplicating data, pass in original array to modify the contents

Function calls should not break an array into subarrays since slicing creates a copy of a smaller,
new array that duplicates data and uses more memory.
Therefore, when you want to modify the contents of the original array passed in,
you need to pass the original reference to it.

This implementation detail means you must use indexes when performing recursion on arrays.
That could be either a current index or a starting and ending index, depending on the algorithm.

<head>
  <script type="text/javascript" src="main.js" defer></script>
</head>
<pre>
Original array: [1, 3, 22, 44, 777, 888, 10000]
Swapped  array: <span id="swapped1"></span>

Original array: [2, 4, 11, 33, 555, 666]
Swapped  array: <span id="swapped2"></span>
</pre>
</html>
*/
function swapPairs(arr) {

  // helper function
  function _swapPairs(arr, currIdx) { // arrays are void functions
    var tmp;
    let end = arr.length - 1;

    // base case, top of stack
    if (currIdx >= end) // pointer is at last element
      return;

    tmp = arr[currIdx] // save spot
    arr[currIdx] = arr[currIdx + 1] // moves pointer
    arr[currIdx + 1] = tmp // swap value with previous
    _swapPairs(arr, currIdx + 2) // moves pointer 2 indices
  }

  // begin function call at beginning index, bottom of call stack
  _swapPairs(arr, 0)
}

let arr = [1, 3, 22, 44, 777, 888, 10000]
swapPairs(arr)
document.getElementById('swapped1').textContent = "[" + arr.join(", ") + "]"

let arr2 = [2, 4, 11, 33, 555, 666]
swapPairs(arr2)
document.getElementById('swapped2').textContent = "[" + arr2.join(", ") + "]"



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
document.getElementById('animalsBefore')
  .innerHTML = animals.join(",  ")
// ['ant', 'bison', 'camel', 'duck', 'elephant']

document.getElementById('animalsSlice')
  .innerHTML = animals.slice(2, 4).join(",  ")
// ['camel', 'duck']

function modifyArray(arr) {
  arr[0] = 'HELLO'
  arr[1] = 'WORLD'
}

modifyArray(animals.slice(2,4))
document.getElementById('animalsSlicedUpdate')
  .innerHTML = animals.join(",  ")
// ['ant', 'bison', 'camel', 'duck', 'elephant']


modifyArray(animals)
document.getElementById('animalsUpdate')
  .innerHTML = animals.join(",  ")
// ['HELLO', 'WORLD', 'camel', 'duck', 'elephant']


