// Given mat[n][n], print boundary in clock wise direction

let arr = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];
let i = 0;
let j = 0;
for (let k = 1; k < arr.length; k++) {
    console.log(arr[i][j]);
    j++;
}
for (let k = 1; k < arr.length; k++) {
    console.log(arr[i][j]);
    i++;
}
for (let k = 1; k < arr.length; k++) {
    console.log(arr[i][j]);
    j--;
}
for (let k = 1; k < arr.length; k++) {
    console.log(arr[i][j]);
    i--;
}