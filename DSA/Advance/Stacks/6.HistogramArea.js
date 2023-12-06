// Histogram Area
// Given continous block of histogram, find max rectangular area
// Which can be present with in histogram

let A = [2, 4, 3, 4, 5, 1];
let leftMin = [];
let rightMin = [];
let stack = [];
for (let i = 0; i < A.length; i++) {
    while (stack.length > 0 && A[stack[stack.length - 1]] > A[i]) {
        stack.pop();
    }
    if (stack.length) leftMin[i] = stack[stack.length - 1];
    else leftMin[i] = -1;
    stack.push(i);
}
stack = [];
for (let i = A.length - 1; i >= 0; i--) {
    while (stack.length > 0 && A[stack[stack.length - 1]] > A[i]) {
        stack.pop();
    }
    if (stack.length) rightMin[i] = stack[stack.length - 1];
    else rightMin[i] = A.length;
    stack.push(i);
}
let max = 0;
for (let i = 0; i < A.length; i++) {
    max = Math.max(max, A[i] * (rightMin[i] - leftMin[i] - 1));
}
console.log(max);