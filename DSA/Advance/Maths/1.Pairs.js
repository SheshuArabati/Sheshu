// Given arr[n], m. Calculate no. of pairs i,j. Such that {arr[i] + arr[j]} % m = 0
// Note: i != j and pair(i, j) is same as pair(j, i);

let arr = [6, 7, 5, 11, 19, 20, 9, 15, 14, 13, 12, 23];
let m = 5;
let freq = [];
for (let i  = 0; i < arr.length; i++) {
    let rem = arr[i] % m;
    freq[rem] = ++freq[rem] || 1;
}
let ans = 0;
let n = freq[0];
ans += n * (n - 1) / 2;
if (m % 2 == 0) {
    n = freq[m / 2];
    ans += n * (n - 1) / 2;
}
let i = 1;
let j = freq.length - 1;
while (i < j) {
    if (freq[i] && freq[j]) {
        ans += freq[i] * freq[j];
    }
    i++;
    j--;
}
console.log(ans);