// Method - 1
let num = 15; isPrime = true;
let length = Math.floor(num / 2);
for (let i = 2; i <= length; i++) if (num % i === 0) isPrime = false;
console.log(isPrime ? "Prime number": "Not a prime number");

// Method - 2
const checkPrimeNumber = (n, len) => {
    if (len === 1) return true;
    else if (n % len === 0) return false;
    return checkPrimeNumber(n, --len);
}
console.log(checkPrimeNumber(num, Math.floor(num / 2)) ? "Prime number" : "Not a prime number");