// Method - 1
let num = 5;
let sum = (num * (num + 1)) / 2;
console.log(sum);

// Method - 2
const sumOfN = (n) => {
    if (n === 1) return 1;
    return n + sumOfN(--n);
}
console.log(sumOfN(num));