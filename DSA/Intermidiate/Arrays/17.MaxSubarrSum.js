// Given an arr, print max subarray sum of length k

let arr = [-3, 4, -2, 5, 3, -2, 8, 2, -1, 4];
let k = 5;
let sum = 0;
for (let i = 0; i < k; i++) {
    sum += arr[i];
}
let ans = sum;
for (let i = 0; i < arr.length - k; i++) {
    sum = sum - arr[i] + arr[k + i];
    if (sum > ans) ans = sum;
}
console.log(ans);