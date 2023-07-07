// Given an arr, check if there exists a subarr with sum = 0

let arr = [2, 2, 1, -3, 4, 3, 1, -2, -3, 2];
for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1];
}
let set = new Set();
let ans = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        ans = true;
    } else if (set.has(arr[i])) {
        ans = true;
    } else {
        set.add(arr[i]);
    }
}
console.log(ans);