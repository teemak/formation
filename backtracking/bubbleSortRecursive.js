function bubble(arr, n = arr.length) {
    // base case - 1 element doesn't need to be sorted
    if (n === 1) return arr;

    // iterate to penultimate - last element will be largest value
    for(let i = 0; i < n - 1; i++) {
        // current > next then swap
        if(arr[i] > arr[i + 1]) {
            // swap
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    // length keeps getting reduced
    return bubble(arr, n - 1);
}

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubble(array);
console.log(sortedArray);

function bubbleSort(arr, idx = 0) {
    if (idx === arr.length) return arr;

    function helper(j) {
        if(j === arr.length - idx - 1) return;

        if(arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }

        return helper(j+1);
    }

    helper(0);
    return bubbleSort(arr, idx+1);
}

const array2 = [64, 34, 25, 12, 22, 11, 90];
const sortedArray2 = bubbleSort(array);
console.log(sortedArray2);
