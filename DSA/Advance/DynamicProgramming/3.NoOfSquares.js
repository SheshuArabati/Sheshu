// Find minimum number of perfect squares required to get sum = n

let A = 5;
let dp = [0];
for (let i = 1; i <= A; i++) {
    let ans = Number.MAX_SAFE_INTEGER;
    for (let x = 1; x * x <= i; x++) {
        ans = Math.min(ans, dp[i - (x * x)]);
    }
    dp.push(ans + 1);
}
console.log(dp[A]);