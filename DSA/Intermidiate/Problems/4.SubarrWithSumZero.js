// Given an array of integers A, find and return whether a subarr is present with sum equals to 0

let arr = [2, 8, -3, -5, 2, -2, 6];
let set = new Set();
set.add(0);
let sum = 0;
let isFound = false;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (set.has(sum)) {
        isFound = true;
        break;
    }
    set.add(sum);
}
console.log(isFound);