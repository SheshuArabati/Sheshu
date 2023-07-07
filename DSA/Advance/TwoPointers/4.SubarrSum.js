// Given an array with +ve elements & an integer K
// Find any subarr with sum = K
// If not possible return [-1, -1]

const checkSum = () => {
    let A = [1, 3, 10, 5, 23, 3];
    let K = 38;
    let i = 0;
    let j = 0;
    let sum = A[0];
    while (j < A.length) {
        if (sum == K) {
            return [i, j];
        } else if (sum < K) {
            j++;
            if (j != A.length) sum += A[j];
        } else {
            sum -= A[i];
            i++;
        }
    }
    return [-1, -1];
}

console.log(checkSum());