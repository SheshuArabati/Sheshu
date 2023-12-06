// Find the min value in the given BST

const min = (root) => {
    while (root.left != null) {
        root = root.left;
    }
    return root.data;
}

console.log(min(root));