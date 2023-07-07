// Find the index of pivot element

const swap = (arr, i, j) => {
    arr[i] = arr[i] + arr[j] - (arr[j] = arr[i]);
}

let arr = [5, 4, 16, 3, 9, 7];
let n = arr.length;
let j = 0;
for (let i = 0; i < n - 1; i++) {
    if (arr[i] < arr[n - 1]) {
        swap(arr, i, j);
        j++;
    }
}
swap(arr, j, n - 1);
console.log(j);