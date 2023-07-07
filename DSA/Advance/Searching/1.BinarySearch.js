// Binary search
// Search given number from the given sorted arr

const search = (arr, k) => {
    let l = 0;
    let h = arr.length - 1;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (arr[mid] == k) return true;
        else if (arr[mid] > k) h = mid - 1;
        else l = mid + 1;
    }
    return false;
}

let arr = [12, 23, 35, 56, 67, 89];
let k = 56;
console.log(search(arr, k));