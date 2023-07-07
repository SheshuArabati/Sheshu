// Given a binary arr, we can atmost replace a single 0 with 1. 
// Find the maximum consecutive 1's, we can get in an arr.

let arr = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0];
let ans = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) count++;
}
if (count == 0) {
    console.log(1);
} else if (count == arr.length) {
    console.log(arr.length);
} else {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            let r = 0;
            let l = 0;
            for (let j = i - 1; arr[j] > 0; j--) {
                l++;
            }
            for (let j = i + 1; arr[j] > 0; j++) {
                r++;
            }
            if ((r + l + 1) > ans) ans = r + l + 1;
        }
    }
    console.log(ans);
}