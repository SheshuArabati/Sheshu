// Given a,n find a^n using recursion

// Method - 1
const pow = (a, n) => {
    if (n == 0) return 1;
    return a * pow(a, --n);
}

console.log(pow(4, 3));

// Method - 2
const pow2 = (a, n) => {
    if (n == 0) return 1;
    if (n % 2 == 0) {
        return pow2(a, Math.floor(n / 2)) * pow2(a, Math.floor(n / 2));
    } else {
        return pow2(a, Math.floor(n / 2)) * pow2(a, Math.floor(n / 2)) * a;
    }
}

console.log(pow2(5, 3));

// Optimised
const pow3 = (a, n) => {
    if (n == 0) return 1;
    let y = pow3(a, Math.floor(n / 2));
    if (n % 2 == 0) {
        return y * y;
    } else {
        return y * y * a;
    }
}

console.log(pow3(5, 4));