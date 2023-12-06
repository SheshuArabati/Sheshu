// Construct a balanced Binary Search Tree using a sorted array

const construct = (arr, s, e) => {
    if (s >= e) return null;
    let mid = Math.floor((s + e) / 2);
    let root = new TreeNode(arr[mid]);
    root.left = construct(arr, s, mid - 1);
    root.right = construct(arr, mid + 1, e);
    return root;
}

let arr = [5, 10, 15, 20, 25, 30];
console.log(construct(arr, 0, arr.length - 1));