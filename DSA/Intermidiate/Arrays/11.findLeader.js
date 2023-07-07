// Given an arr, calculate the no. of leaders.
// An element is a leader if i is strictly greater than all the elements on R.H.S

let arr = [3, 5, 8, 6, 5, 2, 34, 56, 7, 64, 43, 3, 24];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let foundMax = false;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            foundMax = true;
            break;
        }
    }
    if (!foundMax) count++; 
}
console.log(count);

//Optimised
// let arr = [3, 5, 8, 6, 5, 2, 34, 56, 7, 64, 43, 3, 24];
// let count = 1;
let max = arr[arr.length - 1];
for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
        count++;
        max = arr[i];
    }
}
console.log(count);