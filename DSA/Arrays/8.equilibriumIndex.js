// Given array of N elements, count no. of equilibrium index.
// An index i is known as eui index when sum of left values is equals to right values

// BF approach
let arr = [-7, 1, 5, 2, -4, 3, 0];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let leftSum = 0, rightSum = 0;
    for (let j = 0; j < i; j++) {
        leftSum += arr[j];
    }
    for (let j = i +  1; j < arr.length; j++) {
        rightSum += arr[j];
    }
    if (leftSum == rightSum) count++;
}
console.log(count);

// Optimised
// let arr = [-7, 1, 5, 2, -4, 3, 0];
// let count = 0;
let pf = [];
pf[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
    pf[i] = pf[i - 1] + arr[i];
}
for (let i = 0; i < pf.length; i++) {
    let leftSum = 0;
    if (i > 0) leftSum = pf[i - 1];
    let rightSum = pf[pf.length - 1] - pf[i];
    if (leftSum == rightSum) count++;
}
console.log(count);