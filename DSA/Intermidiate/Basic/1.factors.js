// Basic
let n = 24;
let c = 0;
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        c += 1;
    }
}
console.log(c);

// Optimised
let num = 36;
let count = 0;
for (let i = 1; i * i <= n; i++) {
    if (num % i == 0) {
        if (i * i == n) {
            count += 1;
        } else {
            count += 2;
        }
    }
}
console.log(count);