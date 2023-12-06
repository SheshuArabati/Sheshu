// Print the right view of a tree

const rightView = (root) => {
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let rem = queue.shift();
            if (i == size - 1) console.log(rem.data);
            if (rem.left != null) queue.push(rem.left);
            if (rem.right != null) queue.push(rem.right);
        }
    }
}