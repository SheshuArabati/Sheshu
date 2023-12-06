// Search if K is present in BT or not

const search = (root, k) => {
    if (root == null) return false;
    if (root.data == k) return true;
    if (search(root.left, k)) return true;
    if (search(root.right, k)) return true;
    return false;
}

console.log(search(root, k));