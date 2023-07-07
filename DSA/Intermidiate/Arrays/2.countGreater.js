// Given arr, count the no. of elements having atleast one element greater than itself 

let arr = [2, 3, 6, 8, 4, 8, 5, 8, 3];
let max = arr[0];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        count = 0;
    }
    if (arr[i] == max) count++;
}
console.log(arr.length - count);