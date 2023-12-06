// Given n arr elements, calculate the maximum subarr sum.

let arr = [2, -6, 3, 7];
let sum = 0;
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
}
console.log(max);