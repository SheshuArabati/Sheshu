// Find Kth smallest element in given BST

const findEle = (root, k) => {
    if (root == null) return null;
    findEle(root.left, k);
    count++;
    if (count == k) ans = root.data;
    findEle(root.right, k);
}

let ans = 0;
console.log(findEle(root, k));