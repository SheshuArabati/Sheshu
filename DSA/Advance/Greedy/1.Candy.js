// N children are standing in a line. Each child is assigned a rating value.
// You are giving candies to these children subjected to the following requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum number of candies you must give?

let A = [1, 5, 2, 1];
let left = [1];
let right = [];
right[A.length - 1] = 1;
let chocolates = 1;
for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
        chocolates++;
    } else {
        chocolates = 1;
    }
    left.push(chocolates);
}
chocolates = 1;
for (let i = A.length - 2; i >= 0; i--) {
    if (A[i] > A[i + 1]) {
        chocolates++;
    } else {
        chocolates = 1;
    }
    right[i] = chocolates;
}
let sum = 0;
for (let i = 0; i < left.length; i++) {
    sum += Math.max(left[i], right[i]);
}
console.log(sum);