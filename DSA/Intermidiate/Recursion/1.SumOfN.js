// Sum of n natural numbers

const sumOfN = (n) => {
    if (n == 0) return 0;
    return sumOfN(n - 1) + n;
}

console.log(sumOfN(5));