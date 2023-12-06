// Given sorted integer array & an integer K. Check if there is any pair (i, j)
// Such that A[j] - A[i] == K, (i != j) k > 0

const checkPair = (A, K) => {
    let i = 0;
    let j = 1;
    while (j < A.length) {
        if (A[j] - A[i] == K) {
            return true;
        } else if (A[j] - A[i] < K) {
            j++;
        } else {
            i++;
            if (i == j) j++;
        }
    }
    return false;
}

let A = [-2, 0, 1, 3, 10, 20, 23];
let K = 9;
console.log(checkPair(A, K));