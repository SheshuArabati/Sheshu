// Given a binary tree, return the preorder traversal of its nodes values.

const preOrder = (root, arr) => {
    if (root == null) return;
    arr.push(root.data);
    preOrder(root.left, arr);
    preOrder(root.right, arr);
    return arr;
}

console.log(preOrder(root, []));