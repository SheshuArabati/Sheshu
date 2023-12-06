// Check given tree is BST or not

const checkBST = (root, s, e) => {
    if (root == null) return true;
    if (s <= root.data && e >= root.data) {
        let ans = checkBST(root.left, s, root.data - 1);
        if (!ans) return false;
        ans = checkBST(root.right, root.data + 1, e);
        if (!ans) return false;
        return true;
    } else {
        return false;
    }
}

console.log(checkBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));