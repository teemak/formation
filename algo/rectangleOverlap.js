function isRectangleOverlap(rec1, rec2) {
    // Unpack all points
    [r1_x1, r1_y1, r1_x2, r1_y2] = rec1;
    [r2_x1, r2_y1, r2_x2, r2_y2] = rec2;

    // Return False if no overlap possible on X-Axis
    if (r1_x2 <= r2_x1 || r2_x2 <= r1_x1) {
        return false;
    }

    // Return False if no overlap possible on Y-Axis
    return !(r1_y2 <= r2_y1 || r2_y2 <= r1_y1);
}

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var rectangleOverlap = function(rec1, rec2) {
    let overlap = true;
    if(rec1[2] <= rec2[0] || rec1[0] >= rec2[2] ||
       rec1[3] <= rec2[1] || rec1[1] >= rec2[3]) {
        overlap = false;
    }

    return overlap;
};

let rec1 = [0,0,2,2], rec2 = [1,1,3,3]; // Output: true
let rec3 = [0,0,1,1], rec4 = [1,0,2,1]; // Output: false
let rec5 = [0,0,1,1], rec6 = [2,2,3,3]; // Output: false

let r1 = rectangleOverlap(rec1, rec2);
let r2 = rectangleOverlap(rec3, rec4);
let r3 = rectangleOverlap(rec5, rec5);

console.log(r1);
console.log(r2);
console.log(r3);

let r4 = isRectangleOverlap(rec1, rec2);
let r5 = isRectangleOverlap(rec3, rec4);
let r6 = isRectangleOverlap(rec5, rec5);

console.log(r4);
console.log(r5);
console.log(r6);
