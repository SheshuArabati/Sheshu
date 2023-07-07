// Given an arr, find no. of distinct elements

let arr = [3, 5, 6, 5, 4];
let set = new Set();
for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
}
console.log(set.size);