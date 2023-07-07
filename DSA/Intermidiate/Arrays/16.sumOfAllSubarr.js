// Given an arr, print sum of all subarrays

// BF approach
let arr = [6, 8, -1, 7];
let totalSum = 0;
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        totalSum += sum;
    }
}
console.log(totalSum);

//Optimised
// let arr = [6, 8, -1, 7];
// let totalSum = 0;
for (let i = 0; i < arr.length; i++) {
    let noOfTimes = (i + 1) * (arr.length - i)
    totalSum += arr[i] * noOfTimes;
}
console.log(totalSum);