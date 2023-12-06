// Bottom view
// Print bottom view values of a given tree

const bottomView = (root) => {
    let queue = [new Pair(root, 0)];
    let map = new Map();
    let min = 0;
    let max = 0;
    while (queue.length) {
        let rem = queue.shift();
        if (rem.val < min) min = rem.val;
        if (rem.val > max) max = rem.val;
        if (rem.node.left != null) queue.push(new Pair(rem.node.left, rem.val - 1));
        if (rem.node.right != null) queue.push(new Pair(rem.node.right, rem.val + 1));
        if (map.has(rem.val)) {
            let arr = map.get(rem.val);
            arr.push(rem.node.data);
            map.set(rem.val, arr);
        } else {
            map.set(rem.val, [rem.node.data]);
        }
    }
    for (let i = min; i <= max; i++) {
        let op = map.get(i);
        console.log(op[op.length - 1]);
    }
}

class Pair {
    constructor(node, val) {
        this.node = node;
        this.val = val;
    }
}