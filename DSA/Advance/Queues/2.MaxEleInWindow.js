// Given an arr and window of size K. 
// Find max element in every window of size K.

let A = [10, 1, 9, 3, 7, 6, 5, 11, 8];
let K = 4;
let dq = [];
for (let i = 0; i < K; i++) {
    while (dq.length > 0 && dq[dq.length - 1] < A[i]) {
        dq.pop();
    }
    dq.push(A[i]);
}
let ans = [];
ans.push(dq[0]);
let s = 0;
let e = K;
while (e < A.length) {
    if (A[s] == dq[0]) dq.shift();
    while (dq.length > 0 && dq[dq.length - 1] < A[e]) {
        dq.pop();
    }
    dq.push(A[e]);
    ans.push(dq[0]);
    s++;
    e++;
}
console.log(ans);