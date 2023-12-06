// Print prime numbers from 2 to N

let n = 50;
let arr = [];
for (i = 0; i < n + 1; i++) {
    arr[i] = i;
}
for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
        for (let j = i * i; j < arr.length; j += i) {
            arr[j] = false;
        }
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) console.log(i);
}