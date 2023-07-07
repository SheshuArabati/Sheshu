// If n is perfect square
const sqrt = (n) => {
    for (let i = 1; i < n; i++) {
        if (i * i == n) {
            return i;
        }
    }
}
console.log(sqrt(25));

// If n is perfect square or not
let n = 24;
let i = 1;
let val = 0;
while (i * i <= n) {
    val = i;
    i += 1;
}
console.log(val);

// or
let num = 50;
let j = 1;
while (j * j <= num) j += 1;
console.log(j - 1);