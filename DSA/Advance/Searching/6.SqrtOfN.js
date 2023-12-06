// Find sqrt of given number

let num = 37;
let l = 0;
let h = num;
let ans = 0;
while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (mid * mid == num) {
        ans = mid;
        break;
    } else if (mid * mid < num) {
        ans = mid;
        l = mid + 1;
    } else {
        h = mid - 1;
    }
}
console.log(ans);