// Given a matrix of size N * M. Calculate sum of all sub matrices

let arr = [[3, 1], [-1, -2], [2, 4]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        let nt = (i + 1) * (j + 1) * (arr.length - i) * (arr[i].length - j);
        sum += (arr[i][j] * nt);
    }
}
console.log(sum);