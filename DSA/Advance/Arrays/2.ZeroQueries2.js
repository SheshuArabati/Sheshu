// Initially all elments of an arr are 0 & you are given Q queries.
// Every query contains [s, e, val] increment elements from s index to e idx by val.
// Return final state of an arr.

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let Q = [[3, 6, 3], [2, 7, -3], [1, 9, 4]];
for (let i = 0; i < Q.length; i++) {
    let sidx = Q[i][0];
    let eidx = Q[i][1];
    let val = Q[i][2];
    arr[sidx] += val;
    if (eidx + 1 < arr.length) {
        arr[eidx + 1] -= val;
    }
}
for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
}
console.log(arr);