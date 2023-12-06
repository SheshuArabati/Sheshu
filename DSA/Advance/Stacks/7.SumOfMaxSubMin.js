// Given an integer array with distinct integers, find the sum of (max - min) for all subarrays as the ans.

const arrangeLeft = (A, compare) => {
    let stack = [];
    let arr = []
    for (let i = 0; i < A.length; i++) {
        while (stack.length > 0) {
            if (compare == "greater") {
                if (A[stack[stack.length - 1]] > A[i]) break;
            } else {
                if (A[stack[stack.length - 1]] < A[i]) break;
            }
            stack.pop();
        }
        if (stack.length) arr.push(stack[stack.length - 1]);
        else arr.push(-1);
        stack.push(i);
    }
    return arr;
}

const arrangeRight = (A, compare) => {
    let stack = [];
    let arr = [];
    for (let i = A.length - 1; i >= 0; i--) {
        while (stack.length > 0) {
            if (compare == "greater") {
                if (A[stack[stack.length - 1]] > A[i]) break;
            } else {
                if (A[stack[stack.length - 1]] < A[i]) break;
            }
            stack.pop();
        }
        if (stack.length) arr.push(stack[stack.length - 1]);
        else arr.push(A.length);
        stack.push(i);
    }
    let s = 0;
    let e = arr.length - 1;
    while (s < e) {
        arr[s] = arr[s] + arr[e] - (arr[e] = arr[s]);
        s++;
        e--;
    }
    return arr;
}

const solve = (A) => {
    let mod = 1e9 + 7;
    let greaterLeft = arrangeLeft(A, "greater");
    let greaterRight = arrangeRight(A, "greater");
    let smallerLeft = arrangeLeft(A, "smaller");
    let smallerRight = arrangeRight(A, "smaller");
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum = (sum + (A[i] * ((i - greaterLeft[i]) * (greaterRight[i] - i) - (i - smallerLeft[i]) * (smallerRight[i] - i)) % mod + mod) % mod + mod) % mod;
    }
    return sum;
}

let A = [4, 7, 3, 8];
console.log(solve(A));