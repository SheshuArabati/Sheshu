// Given an arr, Find majority element without modifying array
// An element with freq > n/2

let arr = [1, 2, 1, 6, 8, 1, 6, 6, 6, 6, 6];
let maj = arr[0];
let freq = 1;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] == maj) {
        freq++;
    } else if (freq == 0) {
        maj = arr[i];
        freq = 1;
    } else {
        freq--;
    }
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == maj) count++;
}
if (count > arr.length / 2) console.log(maj);
else console.log(-1);