// Given two sorted array's of N elements, find the middle element from the array's

const medianArray = (A, B) => {
    let n = A.length;
    let m = B.length;
    let lo = 0;
    let hi = Math.min(Math.floor((n + m) / 2), n);
    while (lo <= hi) {
        let cut1 = Math.floor((lo + hi) / 2);
        let cut2 = Math.floor((n + m + 1) / 2) - cut1;
        let l1 = cut1 == 0 ? Number.MIN_SAFE_INTEGER : A[cut1 - 1];
        let l2 = cut2 == 0 ? Number.MIN_SAFE_INTEGER : B[cut2 - 1];
        let r1 = cut1 == n ? Number.MAX_SAFE_INTEGER : A[cut1];
        let r2 = cut2 == m ? Number.MAX_SAFE_INTEGER : B[cut2];
        if (l1 <= r2 && l2 <= r1) {
            if ((n + m) % 2 == 0) return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
            return Math.max(l1, l2);
        } else if (l1 > r2) {
            hi = cut1 - 1;
        } else {
            lo = cut1 + 1;
        }
    }
    return -1;
}

let A = [7, 12, 14, 15];
let B = [1, 2, 3, 4, 9, 11];
console.log(medianArray(A, B));