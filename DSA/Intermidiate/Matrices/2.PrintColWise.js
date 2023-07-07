// Given an arr[n][n], print sum of col values

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let r = arr.length;
let c = arr[0].length;
for (let i = 0; i < c; i++) {
    let sum = 0;
    for (let j = 0; j < r; j++) {
        sum += arr[j][i];
    }
    console.log(sum);
}