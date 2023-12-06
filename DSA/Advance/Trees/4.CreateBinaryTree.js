// Given preorder and inorder traversal of a tree, construct the binary tree.

const find = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (val == arr[i]) return i;
    }
}

const create = (pre, ps, pe, ino, is, ie) => {
    if (ps > pe) return null;
    let rootData = pre[ps];
    let root = new Node(rootData);
    let index = find(ino, rootData);
    let len = index - is;
    root.left = create(pre, ps + 1, ps + len, ino, is, index - 1);
    root.right = create(pre, ps + len + 1, pe, ino, index + 1, ie);
    return root;
}

console.log(create(A, 0, A.length - 1, B, 0, B.length - 1));