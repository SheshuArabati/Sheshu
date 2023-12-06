// Given n arr elements, where arr[i] represents height of the building.
// Return amount of water trapped on all buildings.

let arr = [4, 2, 5, 7, 4, 2, 3, 6, 8, 2, 3];
let n = arr.length;

let lmax = [];
lmax[0] = arr[0];
for (let i = 1; i < n; i++) {
    if (arr[i] > lmax[i - 1]) {
        lmax[i] = arr[i];
    } else {
        lmax[i] = lmax[i - 1];
    }
}

let rmax = [];
rmax[n - 1] = arr[n - 1];
for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > rmax[i + 1]) {
        rmax[i] = arr[i];
    } else {
        rmax[i] = rmax[i + 1];
    }
}

let sum = 0;
for (let i = 0; i < n; i++) {
    let min = rmax[i] < lmax[i] ? rmax[i] : lmax[i];
    sum += min - arr[i];
}
console.log(sum);