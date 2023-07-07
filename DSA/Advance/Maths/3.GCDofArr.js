// Q1. Calculate the GCD of entire array.
// Q2. Let N players are playing PUBG. Find min health of the last surviving person.

const gcd = (a, b) => {
    if (b == 0) return a;
    return gcd(b, a % b);
}

let arr = [6, 12, 15];
let ans = arr[0];
for (let i = 1; i < arr.length; i++) {
    ans = gcd(ans, arr[i]);
}
console.log(ans);