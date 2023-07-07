// Given arr of N elements, check if there exists a pair (i, j)
// Such that arr[i] - arr[j] = k & i != j

let arr = [8, 9, 1, -2, 4, 5, 11, -6, 7, 5];
let k = 10;
let found = false;
let set = new Set();
for (let i = 0; i < arr.length; i++) {
    let y = arr[i] - k;
    if (set.has(y)) {
        found = true;
    } else {
        set.add(arr[[i]]);
    }
}
console.log(found);