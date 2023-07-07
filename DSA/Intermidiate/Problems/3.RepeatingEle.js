// Given an integer arr of size N. Find the first repeating ele in it.
// If there are more than one ele return the one with lowest index.

let arr = [1, 2, 3, 2, 3];
let map = new Map();
let index = arr.length;
for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        let oi = map.get(arr[i]);
        if (oi < index) index = oi;
    } else {
        map.set(arr[i], i);
    }
}
console.log(index);