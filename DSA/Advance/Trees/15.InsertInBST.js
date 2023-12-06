// Insert the given node in given BST

const insert = (root, k) => {
    if (root == null) return new Node(k);
    if (root.data >= k) {
        root.left = insert(root.left, k);
    } else {
        root.right = insert(root.right, k);
    }
    return root;
}

console.log(insert(root, k));