// Given an increasing decreasing array with distinct elements find peak element

const findPeakElement = (arr) => {
    let n = arr.length;
    if (n == 1) return arr[0];
    if (arr[0] > arr[1]) return arr[0];
    if (arr[n - 1] > arr[n - 2]) return arr[n - 1];
    let l = 1;
    let h = arr.length - 2;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return arr[mid];
        } else if (arr[mid] > arr[mid - 1]) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return -1;
}

let arr = [1, 3, 5, 10, 15, 12, 6];
console.log(findPeakElement(arr));