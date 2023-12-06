// Given an input arr, formed by rotating a distinct sorted arr right to left.
// Search element and return index if it is present else return -1.

const findK = (arr, k) => {
    let l = 0;
    let h = arr.length - 1;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (arr[mid] == k) return true;
        if (arr[l] <= arr[mid]) {
            if (arr[l] <= k  && k <= arr[mid]) h = mid - 1;
            else l = mid + 1;
        } else {
            if (arr[mid] <= k && k <= arr[h]) l = mid + 1;
            else h = mid - 1;
        }
    }
    return false;
}

let arr = [10, 11, 12, 13, 17, 20, 23, 25, 26, 1, 3, 5, 6, 8];
let k = 27;
console.log(findK(arr, k));