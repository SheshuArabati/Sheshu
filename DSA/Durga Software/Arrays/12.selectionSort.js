let arr = [45, 67, 89, 21, 38, 59, 73, 25];
for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
    }
    if (arr[i] !== arr[min]) arr[i] = arr[i] + arr[min] - (arr[min] = arr[i]);
}
console.log(arr);