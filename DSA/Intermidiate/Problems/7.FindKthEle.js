// Given N & K. Find the K-th ele in N-th row.

const func = (n, k) => {
    if (n == 0 || k == 0) return 0;
    let p = func(--n, Math.floor(k / 2));
    if (k % 2 == 0) return p;
    else return 1 - p;
}

console.log(func(3, 4));