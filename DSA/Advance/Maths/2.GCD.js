// Find GCD of two given numbers

const gcd = (a, b) => {
    if (b == 0) return a;
    return gcd(b, a % b);
}

console.log(gcd(24, 16));