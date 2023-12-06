// Given a set of distinct integers A, return all possible subsets.

const getAllSubsets = (arr, idx, ans) => {
    if (idx == arr.length) {
        console.log(ans);
        return;
    }
    getAllSubsets(arr, idx + 1, ans);
    ans.push(arr[idx]);
    getAllSubsets(arr, idx + 1, ans);
    ans.pop();
}

let A = [1, 2, 3];
getAllSubsets(A, 0, []);