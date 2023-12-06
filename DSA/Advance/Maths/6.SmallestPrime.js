// Return the smallest prime factor of given arr

let n = 50;
let arr = [];
for (let i = 0; i < n + 1; i++) {
    arr[i] = i;
}
for (let i = 2; i * i < n; i++) {
    if (arr[i] == i) {
        for (let j = i * i; j < arr.length; j += i) {
            if (arr[j] == j) arr[j] = i;
        }
    }
}
console.log(arr);