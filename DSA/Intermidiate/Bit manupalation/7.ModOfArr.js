// Given a number in arr format. Calculate arr[] % mod (Google)

let arr = [6, 2, 3, 4, 5];
let mod = 45;
let ans = 0;
let mul = 10;
for (let i = arr.length - 1; i >= 0; i--) {
    ans = (ans + (arr[i] * mul)) % mod;
    mul = (mul * 10) % mod;
}
console.log(ans);