// Given a matrix where every row and col are sorted. Find an ele K.
// Return true if the element exists.

let arr = [
    [-1, 2, 4, 5, 9, 11],
    [1, 4, 7, 8, 10, 14],
    [3, 7, 9, 10, 12, 18],
    [6, 10, 12, 14, 16, 20],
    [11, 15, 19, 21, 24, 27],
    [18, 24, 29, 32, 34, 42]
];

let k = 15;
let isFound = false;
let i = 0;
let j = arr[0].length - 1;
while (i < arr.length && j >= 0) {
    if (arr[i][j] == k) {
        isFound = true;
        break;
    } else if (arr[i][j] > k) {
        j--;
    } else {
        i++;
    }
}
console.log(isFound);