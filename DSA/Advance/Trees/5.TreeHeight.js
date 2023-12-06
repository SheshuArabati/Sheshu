const height = (root) => {
    if (root == null) return -1;
    let lh = height(root.left);
    let rh = height(root.right);
    return Math.max(lh, rh) + 1;
}

console.log(height(root));