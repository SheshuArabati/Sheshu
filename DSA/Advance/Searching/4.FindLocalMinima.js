// Given unsorted arr distinct elements, return any local minima.
// An element is said to be local minima, if it is less than it's adjacent elements.

const findLocalMinima = (arr) => {
    let n = arr.length;
    if (n == 1) return arr[0];
    if (arr[0] < arr[1]) return arr[0];
    if (arr[n - 1] < arr[n - 2]) return arr[n - 1];
    let l = 0;
    let h = n - 1;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            return arr[mid];
        } else if (arr[mid] > arr[mid - 1]) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}

let arr = [9, 8, 7, 3, 6, 4, 1, 5];
console.log(findLocalMinima(arr));