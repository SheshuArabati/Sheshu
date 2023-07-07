// Given arr of N elements, check if there exists a pair (i, j)
// Such that arr[i] + arr[j] = k & i != j

// Using Map
let arr = [8, 9, 1, -2, 4, 5, 11, -6, 7, 5];
let k = 8;
let map = new Map();
for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
let found = false;
for (let i = 0; i < arr.length; i++) {
    let y = k - arr[i];
    if (map.has(y)) {
        if (arr[i] == y) {
            if (map.get(y) > 1)found = true;
        } else {
            found = true;
        }
    }
}
console.log(found);

// Using Set
// let arr = [8, 9, 1, -2, 4, 5, 11, -6, 7, 5];
// let k = 10;
// let found = false;
let set = new Set();
for (let i = 0; i < arr.length; i++) {
    let y = k - arr[i];
    if (set.has(y)) {
        found = true;
        break;
    } else {
        set.add(arr[[i]]);
    }
}
console.log(found);