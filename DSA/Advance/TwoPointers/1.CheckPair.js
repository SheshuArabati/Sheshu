// Given a sorted integer array & an integer K
// Check if there is any pair (i, j) such that A[i] + A[j] == K && i < j

let A = [1, 3, 5, 10, 20, 23, 30];
let K = 8;
let i = 0;
let j = A.length - 1;
let isFound = false;
while (i < j) {
  if (A[i] + A[j] == K) {
    isFound = true;
    break;
  } else if (A[i] + A[j] < K) {
    i++;
  } else {
    j--;
  }
}
console.log(isFound);