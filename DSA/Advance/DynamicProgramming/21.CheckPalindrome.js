// Given a string, for every substring check if that is palindrome or not

let str = "abac";
let n = str.length;
let dp = new Array(n).fill().map(() => new Array(n).fill(false));
for (let i = 0; i < n; i++) {
    let r = 0;
    let c = i;
    while (c < n) {
        if (i == 0) dp[r][c] = true;
        else if (i == 1) dp[r][c] = str[r] == str[c];
        else {
            if (str[r] == str[c]) dp[r][c] = dp[r + 1][c - 1];
            else dp[r][c] = false;
        }
        r++;
        c++;
    }
}
console.log(dp);