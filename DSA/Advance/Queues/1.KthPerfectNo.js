// Generate Kth perfect no in series using only 1 & 2 as digits.
// The series should be in increasing order.

let K = 7;
let queue = [1, 2];
for (let i = 1; i < K; i++) {
    let ele = queue.shift();
    let p = ele + "1";
    let q = ele + "2";
    queue.push(p);
    queue.push(q);
}
console.log(queue.shift());