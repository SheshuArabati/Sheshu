// Find Nth column title
// A B C D ...... AA AB AC......

let map = new Map();
let j = 1;
let n = 30;
for (let i = 65; i <= 90; i++) {
    map.set(j, String.fromCharCode(i));
    j++;
}
let str = "";
while (n != 0) {
    let rem = n % 26;
    str += map.get(rem);
    n = Math.floor(n / 26);
}
let ans ="";
for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
}
console.log(ans);