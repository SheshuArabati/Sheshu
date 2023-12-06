// Selection sort

let arr =  [56, 98, 12, 78, 34, 23];
for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < min) {
            min = arr[j];
            index = j;
        }
    }
    if (i != index) {
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
}
console.log(arr);