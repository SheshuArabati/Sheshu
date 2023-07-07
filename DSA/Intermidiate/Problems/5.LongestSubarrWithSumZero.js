// Find longest subarr with sum zero

let arr = [2, 8, -3, -5, 2, -2, 6];
let map = new Map();
map.set(0, -1);
let len = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.has(sum)) {
        let index = map.get(sum);
        if ((i - index) > len) len = i - index;
    } else {
        map.set(sum, i);
    }
}
console.log(len);