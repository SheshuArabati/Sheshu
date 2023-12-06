// Given an integer array A, find the index of nearest smaller element on left

let A = [4, 5, 2, 10, 3, 12];
let stack = [];
let op = [];
for (let i = 0; i < A.length; i++) {
    while (stack.length > 0 && A[stack[stack.length - 1]] > A[i]) {
        stack.pop();
    }
    if (stack.length) op.push(stack[stack.length - 1]);
    else op.push(-1);
    stack.push(i); 
}
console.log(op);