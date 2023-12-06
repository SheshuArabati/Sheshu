// Level order traversal
// Print the values of a tree in horizontal order line by line

const levelOrder = (root) => {
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        let str = "";
        for (let i = 0; i < size; i++) {
            let rem = queue.shift();
            str += rem.data + " ";
            if (rem.left != null) queue.push(rem.left);
            if (rem.right != null) queue.push(rem.right);
        }
        console.log(str);
    }
}