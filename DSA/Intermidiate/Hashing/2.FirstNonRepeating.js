// Find the first non-repeating element

let arr = [4, 3, 3, 2, 5, 6, 4, 5];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        let freq = map.get(arr[i]);
        map.set(arr[i], ++freq);
    } else {
        map.set(arr[i], 1);
    }
}
for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) == 1) {
        console.log(arr[i]);
        break;
    }
}