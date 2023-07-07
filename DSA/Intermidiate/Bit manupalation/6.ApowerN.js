// Calculate a^n without using inbuilt functions

let num = 5;
let pow = 4;
let mod = 3;
let ans = 1;
for (let i = 0; i < pow; i++) {
    ans = (ans * num) % mod;
}
console.log(ans);