// Given N arr elements, choose two indices (i, j). Such that (i != j) and arr[i] & arr[j] is maximum

let arr = [26, 13, 23, 28, 27, 7, 25];
let ans = 0;
for (let i = 31; i >= 0; i--) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if ((arr[j] >> i) & 1) count++;
    }
    if (count >= 2) {
        ans = ans | 1 << i;
        for (let j = 0; j < arr.length; j++) {
            if (!((arr[j] >> i) & 1)) arr[j] = 0;
        }
    }
}
console.log(ans);