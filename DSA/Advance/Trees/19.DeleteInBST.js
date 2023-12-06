// Delete given node in the given BST

const deleteNode = (root, k) => {
    if (root == null) return null;
    if (root.data > k) {
        root.left = deleteNode(root.left, k);
    } else if (root.data < k) {
        root.right = deleteNode(root.right, k);
    } else {
        if (root.left == null && root.right == null) {
            return null;
        } else if (root.left != null && root.right == null) {
            return root.left;
        } else if (root.left == null && root.right != null) {
            return root.right;
        } else {
            let val = max(root.left);
            root.data = val;
            root.left = deleteNode(root.left, val);
        }
        return root;
    }
}

console.log(deleteNode(root, k));