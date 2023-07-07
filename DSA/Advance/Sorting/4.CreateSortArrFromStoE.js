// Given arr[n] elements & 3 indices s, m & e
// Subarray [s m] is sorted
// Subarray [m+1 e] is sorted
// Sort the subarray [s e]

let arr = [4, 8, -1, 2, 6, 9, 11, 3, 4, 7, 13, 0];
let s = 2;
let m = 6;
let e = 9;
let p1 = s;
let p2 = m + 1;
let op = [];
while (p1 <= m && p2 <= e) {
    if (arr[p1] < arr[p2]) {
        op.push(arr[p1]);
        p1++;
    } else {
        op.push(arr[p2]);
        p2++;
    }
}
while (p1 <= m) {
    op.push(arr[p1]);
    p1++;
}
while (p2 <= e) {
    op.push(arr[p2]);
    p2++;
}
console.log(op);