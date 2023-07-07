// Given a binary arr, we can atmost swap a single 0 with 1. 
// Find the maximum consecutive 1's, we can get in an arr.

let arr = [1, 1, 1, 0, 1, 1, 1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) count++;
}
if (count == 0) {
    console.log(0);
} else if (count == arr.length) {
    console.log(count);
} else {
    let ans = 0 ;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            let l = 0;
            let r = 0;
            for (let j = i - 1; arr[j] > 0; j--) {
                l++;
            }
            for (let j = i + 1; arr[j] > 0; j++) {
                r++;
            }
            if ((l + r) == count) ans = count;
            else if ((r + l + 1) > ans) ans = r + l + 1;
        }
    }
    console.log(ans);
}