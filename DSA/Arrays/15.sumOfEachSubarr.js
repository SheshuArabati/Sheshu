// Given an arr, print sum of each subarray

let arr = [6, 8, -1, 7];
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        console.log(sum);
    }
}