// Given string A of lower alphabets, you can change at most k characters in the given string
// to any other lower case alphabets such that distinct characters are minimized
// Find the minimum number of distinct characters in resulted string

let str = "ababcd";
let k = 3;
let freq = [];
for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i) - 97] = ++freq[str.charCodeAt(i) - 97] || 1;
}
freq = freq.sort();
let ans = 0;
for (let i = 0; i < freq.length; i++) {
    k -= freq[i];
    if (k < 0) {
        ans = freq.length - i;
        break;
    }
}
console.log(ans);