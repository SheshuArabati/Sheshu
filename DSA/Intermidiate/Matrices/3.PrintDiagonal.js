// Given an arr[n][n], print diagonal elements

// Left to right
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
let i = 0;
let j = 0;
while (i < arr.length) {
    console.log(arr[i][j]);
    i++;
    j++;
}

// Right to left

// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// let i = 0;
// let j = arr.length - 1;
while (i < arr.length) {
    console.log(arr[i][j]);
    i++;
    j--;
}