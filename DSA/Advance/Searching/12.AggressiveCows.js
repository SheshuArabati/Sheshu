// Aggressive cows
// Farmer John has built a new long barn with N stalls. 
// Given an array of integers A of size N where each element of the array represents the location of the stall and an integer B which represents the number of cows.
// His cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, 
//John wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?

const check = (arr, mid, b) => {
    let lastpos = arr[0];
    let cows = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastpos >= mid) {
            cows++;
            lastpos = arr[i];
            if (cows == b) return true;
        }
    }
    return false;
}

let A = [5,17,100,11];
A = A.sort((a, b) => a - b);
let B = 2;
let lo = 1;
let hi = A[A.length - 1] - A[0];
let ans = 0;
while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (check(A, mid, B)) {
        ans = mid;
        lo = mid + 1;
    } else {
        hi = mid - 1;
    }
}
console.log(ans);