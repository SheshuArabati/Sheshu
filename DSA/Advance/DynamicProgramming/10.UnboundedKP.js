// Given N items each with a weight and value. Find max value which can be obtained by picking items. 
// Such that total weight of all items <= k.
// Note-1: Every item can be picked infinite no. of times.
// Note-2: We cannot take a part of item.

const kp = (i, cap, wt, val) => {
    if (i < 0 || cap <= 0) return 0;
    if (dp[i][cap] != -1) return dp[i][cap];
    let res = kp(i - 1, cap, wt, val);
    if (cap >= wt[i]) {
        res = Math.max(res, kp(i, cap - wt[i], wt, val) + val[i]);
    }
    return dp[i][cap] = res;
}

let wt = [20, 10, 30, 40];
let val = [100, 60, 120, 150];
let cap = 50;
let n = wt.length;
let dp = new Array(n).fill().map(() => new Array(cap + 1).fill(-1));
console.log(kp(n - 1, cap, wt, val));