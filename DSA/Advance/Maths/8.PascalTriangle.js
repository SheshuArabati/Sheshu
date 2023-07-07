// Print pascal triangle for given number by % mod (Microsoft)

let c = [];
let n = 10;
let mod = 5;
for (let i = 0; i < n; i++) {
    let arr = [];
    arr[0] = 1;
    arr[i] = 1;
    let str = "";
    if (i != 0) str = "1 ";
    for (let j = 1; j < i; j++) {
        arr[j] = (c[i - 1][j - 1] + c[i - 1][j]) % mod;
        str += arr[j] + " ";
    }
    c.push(arr);
    console.log(str + "1");
}