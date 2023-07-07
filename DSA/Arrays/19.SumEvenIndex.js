// Given an arr and Q queries. For each query return the sum of all even indexed elements in the range from s to e.

let arr = [2, 3, 1, 6, 4, 5];
let Q = [[1, 3], [2, 5], [0, 4], [3, 3]];
for (let i = 1; i < arr.length; i ++) {
    if (i % 2 == 0) arr[i] = arr[i - 1] + arr[i];
    else arr[i] = arr[i - 1];
}
for (let i = 0; i < Q.length; i++) {
    let st = Q[i][0];
    let e = Q[i][1];
    if (st > 0) console.log(arr[e] - arr[st - 1]);
    else console.log(arr[e]);
}