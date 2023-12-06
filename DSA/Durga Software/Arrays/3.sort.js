let arr = [34, 45, 9, 1, 2, 6, 3];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) arr[i] = arr[i] + arr[j] - (arr[j] = arr[i]);
    }
}
console.log(arr);