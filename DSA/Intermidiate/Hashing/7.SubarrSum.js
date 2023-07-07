// Find the diff of subarr sums to be equal to k

let arr = [10, 20, 30, 50];
let k = 10;
let pf = []
let found = false;
if (arr[0] == k) found = true;
pf[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] == k) found = true;
    pf[i] = pf[i - 1] + arr[i];
}
let map = new Map();
for (let i = 0; i < pf.length; i++) {
    map.set(pf[i], (map.get(pf[i]) || 0) + 1);
}
for (let i = 0; i < pf.length; i++) {
    let y = k - arr[i];
    if (map.has(y)) found = true;
}
console.log(found);