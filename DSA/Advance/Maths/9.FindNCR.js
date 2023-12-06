// Find nCr % p
// nCr = n!/(n - r)! * r!
const fact = (n) => {
    if (n == 0) return 1;
    return n * fact(--n);
}

const powerMod = (a, n, m) => {
    if (n == 0) return 1;
    let y = powerMod(a, Math.floor(n / 2), m);
    if (n % 2 == 0) return y * y;
    return y * y * a;
}

let n = 5;
let r = 2;
let mod = 7;
let nf = fact(n);
let rf = fact(r);
let nrf = fact(n - r);
let val = ((nf * powerMod(nrf, mod - 2, mod)) % mod * powerMod(rf, mod - 2, mod) % mod) % mod;
console.log(val);