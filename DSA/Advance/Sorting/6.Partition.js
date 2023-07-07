// Given an integer array, consider last element as pivot & rearrange the elements such that for all i
// if (arr[i] < pivot) then all should be left side
// if (arr[i] > pivot) then that must be right side
// Given all distinct elements

const swap = (arr, i, j) => {
    arr[i] = arr[i] + arr[j] - (arr[j] = arr[i]);
}

let arr = [5, 4, 16, 3, 9, 7];
let n = arr.length;
let j = 0;
let i = 0;
for (i = 0; i < n - 1; i++) {
    if (arr[i] < arr[n - 1]) {
        swap(arr, i, j);
        j++;
    }
}
swap(arr, j, n - 1);
console.log(arr);