// Count sort

let arr = [1, -3, 5, 2, 3];
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
let freq = [];
for (let i = 0; i < max - min + 1; i++) {
    freq[i] = 0;
}
for (let i = 0; i < arr.length; i++) {
    let val = arr[i] - min;
    ++freq[val];
}
let k = 0;
for (let i = 0; i < freq.length; i++) {
    for (let j = 0; j < freq[i]; j++) {
        arr[k] = i + min;
        k++;
    }
}
console.log(arr);