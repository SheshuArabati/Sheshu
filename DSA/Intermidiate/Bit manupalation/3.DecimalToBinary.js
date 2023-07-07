// Decimal to binary conversion

let num = 10;
let ans = 0;
let mul = 1;
while (num > 0) {
    let rem = num % 2;
    ans = ans + rem * mul;
    mul *= 10;
    num = Math.floor(num / 2);
}
console.log(ans);