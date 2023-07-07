// Given a, n & m. Calculate a ^ n % m

const pow = (a, n, m) => {
    if (n == 0) return 1;
    let y = pow(a, Math.floor(n / 2), m);
    if (n % 2 == 0) return (y * y) % m;
    else return (((y * y) % m) * (a % m)) % m;
}

console.log(pow(4, 3, 10));