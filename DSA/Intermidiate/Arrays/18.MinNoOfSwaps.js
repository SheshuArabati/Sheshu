// Given arr and B, find and return min no of swaps to bring all the numbers <= B together (Google)

let arr = [1, 12, 10, 3, 14, 10, 5];
let B = 8;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= B) count++;
}
if (count == 0 || count == 1 || count == arr.length) {
    console.log(0);
}  
let bad = 0;
for (let i = 0; i < count; i++) {
    if (arr[i] > B) bad++;
}
let ans = bad;
let st = 1;
let e = count;
while (e < arr.length) {
    if (arr[st - 1] > B) bad--;
    if (arr[e] > B) bad++;
    if (bad < ans) ans = bad;
    st++;
    e++;
}
console.log(ans);