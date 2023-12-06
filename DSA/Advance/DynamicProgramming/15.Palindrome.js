// Palindrome subsequence
// Given a string, find longest palindromic susequence

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

let str1 = "scalar";
let str2 = str1.split("").reverse().join().replaceAll(",", "");
let n = str1.length;
let dp = new Array(n).fill().map(() => new Array(n).fill(-1));
console.log(lcs(str1, str2, n - 1, n - 1));