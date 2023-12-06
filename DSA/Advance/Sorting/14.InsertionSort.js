// Insertion sort

let arr = [4, 6, 8, 4, 2, 1, 4, 7, 9];
let i, key, j;
for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[j + 1] = key;
} 
console.log(arr);