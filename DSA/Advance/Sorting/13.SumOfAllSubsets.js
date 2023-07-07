// Find the sum of (max - min) for all subsets of the array

const power = (a, n) => {
    if (n == 0) return 1;
    let y = power(a, Math.floor(n / 2));
    if (n % 2 == 0) return y * y;
    return y * y * a;
}

let arr = [3, 2, 5];
arr = arr.sort((a, b) => a - b);
let sum = 0;
let x = 1;
let y = power(2, arr.length - 1);
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * (x - y);
    x = x * 2;
    y = Math.floor(y / 2);
}
console.log(sum);