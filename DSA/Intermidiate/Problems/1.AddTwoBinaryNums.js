// Given two binary strings A & B. Return their sum also a binary string

let str1 = "10111";
let str2 = "11001";
let i = str1.length - 1;
let j = str2.length - 1;
let c = 0;
let op = "";
while (i >= 0 || j >= 0 || c > 0) {
    let n1 = 0, n2 = 0;
    if (Number(str1[i])) n1 = Number(str1[i]);
    if (Number(str2[j])) n2 = Number(str2[j]);
    let sum =  n1 + n2 + c;
    let dig = sum % 2;
    op += dig;
    c = Math.floor(sum / 2);
    i--;
    j--;
}
let ans = "";
for (let i = op.length - 1; i >= 0; i--) {
    ans += op[i];
}
console.log(ans);