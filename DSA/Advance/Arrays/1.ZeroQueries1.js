// Initially all elments of an arr are 0 & you are given Q queries.
// Every query contains idx & val, increment elements from i th index to last idx by val.
// Return final state of an arr.

let arr = [0, 0, 0, 0, 0, 0, 0];
let Q = [[3, 4], [1, 3], [4, -2]];
for (let i = 0; i < Q.length; i++) {
    let idx = Q[i][0];
    let val = Q[i][1];
    arr[idx] += val;
}
for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
}
console.log(arr);