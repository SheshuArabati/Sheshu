// Print the left view of a tree

const leftView = (root) => {
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let rem = queue.shift();
            if (i == 0) console.log(rem.data);
            if (rem.left != null) queue.push(rem.left);
            if (rem.right != null) queue.push(rem.right);
        }
    }
}