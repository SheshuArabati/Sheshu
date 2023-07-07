// Given an arr of elements delete all elements using fn. such that
// 1) It removes 1 element at a time
// 2) It costs sum of all elements left before deletion
// Find the least cost?

let arr = [5, 8, 3];
let sum = 0;
arr = arr.sort((a, b) => b - a);
for (let i = 0; i < arr.length; i++) {
    sum += (i + 1) * arr[i];
}
console.log(sum);