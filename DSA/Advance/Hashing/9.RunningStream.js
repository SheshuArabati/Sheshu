// Given a running stream of characters, check at every step if the current string is palindrome

let fh = 0;
let bh = 0;
let mul = 1;
let num = 29;
let mod = 1e9 + 7;
let A = "xyxyyxyx";
for (let i = 0; i < A.length; i++) {
    let ch = A[i].charCodeAt(0) - 97 + 1;
    fh = (fh * num + ch) % mod;
    bh = (bh + ch * mul) % mod;
    mul = (mul * num) % mod;
    if (fh == bh) console.log(true);
    else console.log(false);
}