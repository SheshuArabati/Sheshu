// Find the count of subarr having sum zero

let arr = [2, 8, -3, -5, 2, -2, 6, -6];
let map = new Map();
map.set(0, 1);
let sum = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.has(sum)) {
        count += map.get(sum);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
}
console.log(count);