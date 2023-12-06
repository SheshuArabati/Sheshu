// Given a binary tree, return the inorder traversal of its nodes values.

const inOrder = (root, arr) => {
    if (root == null) return;
    inOrder(root.left, arr);
    arr.push(root.data);
    inOrder(root.right, arr);
    return arr;
}

console.log(inOrder(root, []));