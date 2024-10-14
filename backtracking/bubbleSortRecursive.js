function bubble(arr, n = arr.length) {
    if (n === 1) return arr;

    for(let i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    return bubble(arr, n - 1);
}

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubble(array);
console.log(sortedArray);

