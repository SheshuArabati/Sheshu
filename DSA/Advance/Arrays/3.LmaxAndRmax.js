// Given an arr, create two arrays lmax & rmax.
// lmax[i] = max of all elements from 0 to i.
// rmax[i] = max of all elements from i to n - 1.

let arr = [1, -6, 3, 8, 4, 5, 2];

let lmax = [];
lmax[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lmax[i - 1]) {
        lmax[i] = arr[i];
    } else {
        lmax[i] = lmax[i - 1];
    }
}
console.log(lmax);

let rmax = [];
rmax[arr.length - 1] = arr[arr.length - 1];
for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > rmax[i + 1]) {
        rmax[i] = arr[i];
    } else {
        rmax[i] = rmax[i + 1];
    }
}
console.log(rmax);