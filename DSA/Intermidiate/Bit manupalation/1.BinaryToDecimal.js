// Binary to decimal conversion

let num = 1010;
let mul = 1;
let ans = 0;
while (num > 0) {
    let rem = num % 10;
    ans += (rem * mul);
    num = Math.floor(num / 10);
    mul *= 2;
}
console.log(ans);