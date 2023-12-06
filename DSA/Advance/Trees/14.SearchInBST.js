// Search the given value in given BST

const search = (root, k) => {
    if (root == null) return false;
    if (root.data == k) return true;
    else if (root.data > k) return search(root.left, k);
    return search(root.right, k);
}

console.log(search(root, k));