// Given an array A of size N denoting collection of numbers that might contain duplicates, 
// return all possible unique permutations.

const permutations = (freq, n, ans, idx) => {
    if (idx == n) {
        op.push([...ans]);
        return;
    }
    for (let i = 0; i <= n; i++) {
        if (freq[i] > 0) {
            --freq[i];
            ans[idx] = i;
            permutations(freq, n, ans, idx + 1);
            ++freq[i];
        }
    }
}

let A = [2, 1, 2];
let op = [];
let freq = [];
for (let i = 0; i < A.length; i++) {
    if (freq[A[i]]) {
        ++freq[A[i]];
    } else {
        freq[A[i]] = 1;
    }
}
permutations(freq, A.length, [], 0);
console.log(op);