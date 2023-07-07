// Given an array of N elements, A[i] represents height of each wall.
// Find max water accumulated between any two walls.
// Note: Between two walls, 1 unit distance is present

let A = [3, 7, 4, 5, 2];
let max = 0;
let left = 0;
let right = A.length - 1;
while (left < right) {
    let height = Math.min(A[left], A[right]);
    let width = right - left;
    let area = height * width;
    if (area > max) max = area;
    if (A[left] > A[right]) right--;
    else left++;
}
console.log(max);