// Given 2 sorted arrays, a[n] & b[m] create c[] which contains overall sorted data

let a = [7, 10, 11, 14];
let b = [3, 8, 9];
let op = [];
let p1 = 0;
let p2 = 0;
while (p1 < a.length && p2 < b.length) {
    if (a[p1] <= b[p2]) {
        op.push(a[p1]);
        p1++;
    } else {
        op.push(b[p2]);
        p2++;
    }
}
while (p1 < a.length) {
    op.push(a[p1]);
    p1++;
}
while (p2 < b.length) {
    op.push(b[p2]);
    p2++;
}
console.log(op);