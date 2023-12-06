// Find two unique elements

let arr = [3, 6, 4, 4, 3, 8];
let val = 0;
for (let i = 0; i < arr.length; i++) {
    val ^= arr[i];
}
let posn = -1;
for (let i = 31; i >= 0; i--) {
    if ((val >> i) & 1) {
        posn = i;
        break;
    }
}
let set = 0;
let unset = 0;
for (let i = 0; i < arr.length; i++) {
    if ((arr[i] >> posn) & 1) set ^= arr[i];
    else unset ^= arr[i];
}
console.log(set, unset);