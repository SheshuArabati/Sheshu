// Given 2 strings str1 & str2, find min operations to be performed in s1 so that it becomes equal to s2 (Google)

const ed = (str1, str2, i, j) => {
    if (i < 0 && j < 0) return 0;
    if (i < 0) return j + 1;
    if (j < 0) return i + 1;
    if (dp[i][j] != -1) return dp[i][j];
    if (str1[i] == str2[j]) {
        dp[i][j] = ed(str1, str2, i - 1, j - 1);
    } else {
        let a = ed(str1, str2, i, j - 1);
        let b = ed(str1, str2, i - 1, j);
        let c = ed(str1, str2, i - 1, j - 1);
        dp[i][j] = Math.min(a, b, c) + 1;
    }
    return dp[i][j];
}

let str1 = "afacl";
let str2 = "fgl";
let n = str1.length;
let m = str2.length;
let dp = new Array(n).fill().map(() => new Array(m).fill(-1));
console.log(ed(str1, str2, n - 1, m - 1));