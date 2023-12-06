// Given an integer array A of size N denoting collection of numbers, return all possible permutations.

const permutations = (arr, idx, ans, visited) => {
    if (idx == arr.length) {
        console.log(ans);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (visited[i] == false) {
            visited[i] = true;
            ans[idx] = arr[i];
            permutations(arr, idx + 1, ans, visited);
            visited[i] = false;
        }
    }
}

let A = [1, 2, 3];
let visited = [];
for (let i = 0; i < A.length; i++) {
    visited.push(false);
}
permutations(A, 0, [], visited);