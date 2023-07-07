// Given a sorted array of elements, find first index of a given target

const findFirstIndex = (arr, k) => {
    let ans = -1;
    let l = 0;
    let h = arr.length - 1;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (arr[mid] == k) {
            ans = mid;
            h = mid - 1;
        } else if (arr[mid] >= k) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

let arr = [-5, -5, -3, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 5, 8, 10, 10, 15, 16];
let k = 10;
console.log(findFirstIndex(arr, k));