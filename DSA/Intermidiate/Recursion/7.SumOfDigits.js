// Find the sum of digits of a number

const sum = (n) => {
    if (n == 0) return 0;
    return sum(Math.floor(n / 10)) + (n % 10);
}

console.log(sum(12534));