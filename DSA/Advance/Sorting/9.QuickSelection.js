// Given an arr and an integer k, find the kth smallest number from arr. (Google)

const partition = (arr, s, e) => {
    let n = e;
    let j = s;
    for (let i = s; i < n; i++) {
        if (arr[i] < arr[n]) {
            arr[i] = arr[i] + arr[j] - (arr[j] = arr[i]);
            j++;
        }
    }
    arr[j] = arr[j] + arr[n] - (arr[n] = arr[j]);
    return j;
}

const quickSelection = (arr, s, e, k) => {
    let pi = partition(arr, s, e);
    if (pi == k) return arr[k];
    else if (pi < k) return quickSelection(arr, pi + 1, e, k);
    else return quickSelection(arr, s, pi - 1, k);
}

let arr = [4, 6, 8, 2, 1, 7, 9];
let k = 3;
let val = quickSelection(arr, 0, arr.length - 1, k - 1);
console.log(val);