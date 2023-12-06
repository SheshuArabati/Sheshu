let arr = [34, 45, 9, 1, 2, 6, 3];
// Method - 1
let max = arr[0] ;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
}
console.log(max);
// Method - 2
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) arr[i] = arr[i] + arr[j] - (arr[j] = arr[i]);
    }
}
console.log("First maximum: ", arr[arr.length - 1]);
console.log("Second maximum: ", arr[arr.length - 2]);
console.log("Third maximum: ", arr[arr.length - 3]);