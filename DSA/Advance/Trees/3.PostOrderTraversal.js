// Given a binary tree, return the postorder traversal of its nodes values.

const postOrder = (root, arr) => {
    if (root == null) return;
    postOrder(root.left, arr);
    postOrder(root.right, arr);
    arr.push(root.data);
    return arr;
}

console.log(postOrder(root, []));