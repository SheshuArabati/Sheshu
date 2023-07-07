// Count pair sum
// Given a sorted integer array & an integer K
// Count all the pair (i, j) such that A[i] + A[j] == K && i < j

const countPair = (A, K) => {
    let ans = 0;
    let i = 0;
    let j = A.length - 1;
    while (i < j) {
        if (A[i] + A[j] == K) {
            if (A[i] == A[j]) {
                let n = j - i + 1;
                return ans + (n * (n - 1) / 2);
            }
            let counti = 1;
            let countj = 1;
            for (let c = i + 1; c < j; c++) {
                if (A[i] == A[c]) counti++;
                else break;
            }
            for (let c = j - 1; c > i; c--) {
                if (A[j] == A[c]) countj++;
                else break;
            }
            ans += (counti * countj);
            i += counti;
            j -= countj;
        } else if (A[i] + A[j] <= K) {
            i++;
        } else {
            j--;
        }
    }
    return ans;
}

let A = [1, 3, 3, 5, 10, 20, 23, 30, 30];
let K = 33;
console.log(countPair(A, K));