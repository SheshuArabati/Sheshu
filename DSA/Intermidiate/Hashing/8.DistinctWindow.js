// Given arr elements, calculate no. of distinct elements in every subarr of size k

let arr = [2, 4, 3, 8, 3, 9, 4, 9, 4, 10];
let k = 4;
let map = new Map();
for (let i = 0; i < k; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
let count = map.size;
let i = 1;
let e = k;
while (e < arr.length) {
    map.set(arr[i - 1], (map.get(arr[i - 1]) - 1));
    if (map.get(arr[i - 1]) == 0) {
        map.delete(arr[i - 1]);
    }
    map.set(arr[e], (map.get(arr[e]) || 0) + 1);
    count += map.size;
    i++;
    e++;
}
console.log(count);