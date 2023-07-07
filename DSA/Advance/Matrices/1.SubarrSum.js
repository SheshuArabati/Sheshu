// Given a matrix of size N * M & Q queries. For each query, find sum of given sub matrix.
// Note: TL is top left and BR is bottom right.

let arr = [[3, 2, 4, 1], [-1, 4, 3, 2], [2, 7, 6, 3]];
let TL = [[1, 2]];
let BR = [[2, 3]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
        arr[i][j] += arr[i][j - 1];
    }
}
for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] += arr[i - 1][j];
    }
}
for (let i = 0; i < TL.length; i++) {
    let a1 = TL[i][0];
    let b1 = TL[i][1];
    let a2 = BR[i][0];
    let b2 = BR[i][1];
    let val = arr[a2][b2];
    if (b1 > 0) val -= arr[a2][b1 - 1];
    if (a1 > 0) val -= arr[a1 - 1][b2];
    if (a1 > 0 && b1 > 0) val += arr[a1 - 1][b1 - 1];
    console.log(val);
}