// Given an integer array A, find the index of nearest smaller element on right

let A = [4, 5, 2, 10, 3, 12];
let stack = [];
let op = [];
for (let i = A.length - 1; i >= 0; i--) {
    while (stack.length > 0 && A[stack[stack.length -1]] > A[i]) {
        stack.pop();
    }
    if (stack.length) op[i] = stack[stack.length - 1];
    else op[i] = -1;
    stack.push(i);
}
console.log(op);