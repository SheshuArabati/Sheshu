// Spiral matrix

let arr = [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]];
let n = arr.length;
let i = 0;
let j = 0;
while (n > 1) {
    for (let k = 1; k < n; k++) {
        console.log(arr[i][j]);
        j++;
    }
    for (let k = 1; k < n; k++) {
        console.log(arr[i][j]);
        i++;
    }
    for (let k = 1; k < n; k++) {
        console.log(arr[i][j]);
        j--;
    }
    for (let k = 1; k < n; k++) {
        console.log(arr[i][j]);
        i--;
    }
    i++;
    j++;
    n -= 2;
}
if (n == 1) console.log(arr[i][j]);