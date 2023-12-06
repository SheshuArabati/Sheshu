// Bubble sort

let arr =  [56, 98, 12, 78, 34, 23];
for  (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            arr[j] = arr[j] + arr[j + 1] - (arr[j + 1] = arr[j]);
        }
    }
}
console.log(arr);