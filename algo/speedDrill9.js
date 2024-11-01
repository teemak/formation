function solution(arr1, arr2, arr3) {
    let result = [];
    // 3 pointers
    let i = 0, j = 0, k = 0;
    
    // keep iterating to longest array
    while (i < arr1.length || j < arr2.length || k < arr3.length) {
        // handle short arrays
        // if array is finished set value to Infinity
        let val1 = i < arr1.length ? arr1[i] : Infinity;
        let val2 = j < arr2.length ? arr2[j] : Infinity;
        let val3 = k < arr3.length ? arr3[k] : Infinity;
        
        // check if array1 has smallest value
        if (val1 <= val2 && val1 <= val3) {
            // add to result array and increment pointer
            result.push(val1);
            i++;
        // check array2 has smallest value
        } else if (val2 <= val1 && val2 <= val3) {
            result.push(val2);
            j++;
        } else { // array3 has smallest value
            result.push(val3);
            k++;
        }
    }
    
    return result;    
}


function solution(s, i, r) {
    if(s < 0 || i < 0 || r < 0) return [];
    
    let result = [s];
    let idx = s;
    
    while(--r > 0) {
        result.push(idx+i)
        idx = idx + i;        
    }
    
    return result;
}

function createArray(s, i, r) {
    let result = [];
    for (let j = 0; j < r; j++) {
        result.push(s + j * i);
    }
    return result;
}

function solution(array) {
    let result = [];
    let left = 0;
    let right = array.length - 1;
    let index = array.length -1;
    
    while(left <= right) {
        let leftValue = array[left] * array[left];
        let rightValue = array[right] * array[right];
        
        if(leftValue > rightValue) {
            result[index] = leftValue;
            left++;
        } else {
            result[index] = rightValue;
            right--;
        }
        index--;
    }
    
    /*for(let i = 0; i < array.length; i++) {
        let leftValue = array[left] * array[left];
        let rightValue = array[right] * array[right];
        
        if(leftValue > rightValue) {
            result.push(leftValue);
            left++;
        } else if(rightValue > leftValue) {
            result.push(rightValue)    
            right--;
        } else if(leftValue == rightValue) {
            result.push(rightValue)
            result.push(leftValue)            
        }
    }*/
    
    return result;
}

