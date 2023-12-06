// Method - 1
let num = 4;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log(fact);

// Method - 2
const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(--n);
}
console.log(factorial(num));