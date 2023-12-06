// Find Ath magical number
// A number is magical if it is divisible by B or C

const gcd = (a, b) => {
    if (b == 0) return a;
    return gcd(b, a % b);
}

let A = 8;
let B = 3;
let C = 2;
let l = 1;
let h = Math.min(B, C) * A;
let lcm = B * C / gcd(B, C);
let ans = 0;
while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    let count = (mid / B) + (mid / C) - (mid / lcm);
    if (count < A) {
        l = mid + 1;
    } else if (count > A) {
        h = mid - 1;
    } else {
        ans = mid;
        h = mid - 1;
    }
}
console.log(ans);