// Longest Increasing Subsequence
// Given an arr, find length of longest increasing subsequence

const lis = (arr, i) => {
    if (dp[i] != -1) return dp[i];
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
            max = Math.max(max, lis(arr, j));
        }
    }
    return dp[i] = max + 1;
}

let arr = [0, 8, 4, 2, 10, 6, 11, 15];
let n = arr.length;
let dp = new Array(n).fill(-1);
let ans = 0;
for (let i = 0; i < n; i++) {
    ans = Math.max(ans, lis(arr, i));
}
console.log(ans);

// Optimised approach TC: O(nlogn)
const findIndex = (seq, val) => {
    let l = 0;
    let h = seq.length;
    let ans = -1;
    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        if (seq[m] >= val) {
            ans = m;
            h = m - 1;
        } else {
            l = m + 1;
        }
    }
    return ans;
}

// let arr = [0, 8, 4, 2, 10, 6, 11, 15];
let seq = [arr[0]];
for (let i = 1; i < arr.length; i++) {
    if (seq[seq.length - 1] < arr[i]) {
        seq.push(arr[i]);
    } else {
        let idx = findIndex(seq, arr[i]);
        seq[idx] = arr[i];
    }
}
console.log(seq);