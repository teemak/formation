// largest element moves to last index
// second largest element will be left of largest element
function bubbleSort(arr) {
    // optimize = arr.length - 1; end of scan will always have largest element
    for (let i = 0; i < arr.length; i++) {
        // optimize = arr.length - i - 1; shrink swapping scan
        for (let j = 0; j < arr.length; j++) {
            // get comparison indices
            // j is current; next is j + 1
            // moves pointers forward
            const [current, next] = [arr[j], arr[j + 1]];

            // moves higher value towards end of array
            if(current > next) {
                // swap current and next
                // lesser value moves left
                arr[j] = arr[j+1];
                // arr[j] = next;
                // current value moves right
                // arr[j + 1] = arr[j]; // position / value arr[j] is 8 from previous line
                arr[j + 1] = current;
            }
            // current < next
            // values are in correct order
            // no swap and pointers move forward
        }
    }
    return arr;
}

// runtime: 0(n^2) because of nested loop

let arr1 = [9,8,4,2,6,3];
let res1 = bubbleSort(arr1);

console.log(res1);

//   current
// [ 9,      8,4,2,6,3];
//           next
//    
// [8,8,4,2,6,3];
// [8,9,4,2,6,3];
//  
//    c
// [8,9,4,2,6,3];
//      n
//
// [8,4,4,2,6,3];
// [8,4,9,2,6,3];
//
//      c
// [8,4,9,2,6,3];
//        n
// ...
//  c
// [8,4,2,6,3,9];
//    n
