// Find max value in given BST

const max = (root) => {
    while (root.right != null) {
        root = root.right;
    }
    return root.data;
}

console.log(max(root));