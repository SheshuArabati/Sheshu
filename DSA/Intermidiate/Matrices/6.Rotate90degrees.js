// Given arr[n][n], rotate arr to 90 degrees from top right

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        arr[i][j] = arr[i][j] + arr[j][i] - (arr[j][i] = arr[i][j]);
    }
}
for (let r = 0; r < arr.length; r++) {
    let i = 0;
    let j = arr[r].length - 1;
    while (i < j) {
        arr[r][i] = arr[r][i] + arr[r][j] - (arr[r][j] = arr[r][i]);
        i++;
        j--;
    }
}
console.log(arr);