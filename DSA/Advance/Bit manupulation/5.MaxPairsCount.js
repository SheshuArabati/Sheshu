// Calculate the count of pairs you can make for which bitwise AND is maximum (Google)

let arr = [26, 13, 23, 28, 27, 7, 25];
for (let i = 31; i >= 0; i--) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if ((arr[j] >> i) & 1) count++;
    }
    if (count >= 2) {
        for (let j = 0; j < arr.length; j++) {
            if (!((arr[j] >> i) & 1)) arr[j] = 0;
        }
    }
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) count++;
}
console.log((count * (count - 1)) / 2);