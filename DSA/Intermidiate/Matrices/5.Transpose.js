// Given arr[n][n], transpose it

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        arr[i][j] = arr[i][j] + arr[j][i] - (arr[j][i] = arr[i][j]);
    }
}
console.log(arr);