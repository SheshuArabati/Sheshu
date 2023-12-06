// Longest common sequence
// Given 2 strings find the length of longest common subsequence

const lcs = (str1, str2, i, j) => {
    if (i < 0 || j < 0) return 0;
    if (dp[i][j] != -1) return dp[i][j];
    if (str1[i] == str2[j]) {
        dp[i][j] = lcs(str1, str2, i - 1, j - 1) + 1;
    } else {
        dp[i][j] = Math.max(lcs(str1, str2, i - 1, j), lcs(str1, str2, i, j - 1));
    }
    return dp[i][j];
}

let str1 = "abbcdgf";
let str2 = "achegf";
let n = str1.length;
let m = str2.length;
let dp = new Array(n).fill().map(() => new Array(m).fill(-1));
console.log(lcs(str1, str2, n - 1, m - 1));