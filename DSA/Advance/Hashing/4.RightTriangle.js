// Given co-ordinates of N distinct points on a 2D plane. Count the no. of right triangle using 
// the given set of points such that two small sides of a should be parallel to X-axis & Y-axis.

let A = [1, 3, 5, 5, 1];
let B = [3, 3, 3, 1, 1];
let mapA = new Map();
let mapB = new Map();
for (let i = 0; i < A.length; i++) {
    mapA.set(A[i], (mapA.get(A[i]) || 0) + 1);
    mapB.set(B[i], (mapB.get(B[i]) || 0) + 1); 
}
let sum = 0;
for (let i = 0; i < A.length; i++) {
    sum += (mapA.get(A[i]) - 1) * (mapB.get(B[i]) - 1);
}
console.log(sum);