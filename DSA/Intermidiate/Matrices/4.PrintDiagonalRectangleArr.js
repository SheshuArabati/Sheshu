// Given arr[n][m], print diagonals from right to left

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let n = arr.length;
let m = arr[0].length;
for (let j = 0; j < m; j++) {
    let r = 0;
    let c = j;
    while (c >= 0 && r < n) {
        console.log(arr[r][c]);
        r++;
        c--;
    }
}
for (let i = 1; i < n; i++) {
    let r = i;
    let c = m - 1;
    while (r < n && c >= 0) {
        console.log(arr[r][c]);
        r++;
        c--;
    }
}