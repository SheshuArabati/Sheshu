// Regular Expression Matching (Leetcode Hard)
// Given an input string S and pattern P. Implement pattern matching with support for ? and *
// Note-1: ? -> Matches any single character
// Note-2: * -> Matches any sequence of characters

const isMatch = (str1, str2, i, j) => {
    if (i < 0 && j < 0) return true;
    if (j < 0) return false;
    if (i < 0) {
        for (let k = 0; k <= j; k++) {
            if (str2[k] != "*") return false;
        }
        return true;
    }
    if (dp[i][j] != -1) return dp[i][j];
    if (str1[i] == str2[j] || str2[j] == "?") {
        dp[i][j] = isMatch(str1, str2, i - 1, j - 1);
    } else if (str2[j] == "*") {
        dp[i][j] = isMatch(str1, str2, i - 1, j) || isMatch(str1, str2, i, j - 1);
    } else {
        dp[i][j] = false;
    }
    return dp[i][j];
}

let str1 = "acb";
let str2 = "a?*b";
let n = str1.length;
let m = str2.length;
let dp = new Array(n).fill().map(() => new Array(m).fill(-1));
console.log(isMatch(str1, str2, n - 1, m - 1));