// Given an arr, we have to delete one element such that gcd of remaining elements becomes max

const gcd = (a, b) => {
    if (b == 0) return a;
    return gcd(b, a % b);
}

let arr = [24, 16, 18, 30, 15];
let pf = [];
let sf = [];
pf[0] = arr[0];
sf[arr.length - 1] = arr[arr.length - 1];
for (let i = 1; i < arr.length; i++) {
    pf[i] = gcd(arr[i], pf[i - 1]);
}
for (let i = arr.length - 2; i >= 0; i--) {
    sf[i] = gcd(arr[i], sf[i + 1]);
}
let max = 0;
for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = 0;
    if (i > 0) left = pf[i - 1];
    if (i < arr.length - 1) right = sf[i + 1];
    let ans = gcd(left, right);
    if (ans > max) max = ans;
}
console.log(max);