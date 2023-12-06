// Quick sort

const partition = (arr, lo, hi) => {
    let n = hi;
    let j = lo;
    for (let i = lo; i < n; i++) {
        if (arr[i] < arr[n]) {
            arr[i] = arr[i] + arr[j] - (arr[j] = arr[i]);
            j++;
        }
    }
    arr[j] = arr[j] + arr[n] - (arr[n] = arr[j]);
    return j;
}

const quickSort = (arr, s, e) => {
    if (s >= e) return;
    let pi = partition(arr, s, e);
    quickSort(arr, s, pi - 1);
    quickSort(arr, pi + 1, e);
}

let arr = [4, 6, 8, 2, 1, 7, 9];
quickSort(arr, 0, arr.length - 1);
console.log(arr);