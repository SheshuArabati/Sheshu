// Level order traversal
// Print the values of a tree in horizontal order

const levelOrder = (root) => {
    let queue = [root];
    let arr = [];
    while (queue.length) {
        let rem = queue.shift();
        arr.push(rem.data);
        if (rem.left != null) queue.push(rem.left);
        if (rem.right != null) queue.push(rem.right);
    }
    return arr;
}