let arr = [45, 67, 98, 73, 51, 64,86, 35, 28, 91];
for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = temp;
}
console.log(arr);