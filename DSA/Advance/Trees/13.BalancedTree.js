// Check whether given tree is balanced or not

const isBalanced = (root) => {
    if (root == null) return -1;
    let lh = isBalanced(root.left);
    let rh = isBalanced(root.right);
    if (Math.abs(lh - rh) > 1) isTreeBalanced = false;
    return Math.max(lh, rh) + 1;
}

let isTreeBalanced = true;
isBalanced(root);
console.log(isTreeBalanced);