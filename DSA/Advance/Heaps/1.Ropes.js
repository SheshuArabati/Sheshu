// You are given an array A of integers that represent the lengths of ropes.
// You need to connect these ropes into one rope. The cost of joining two ropes equals the sum of their lengths.
// Find and return the minimum cost to connect these ropes into one rope.

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;
class PriorityQueue {
    constructor(comparator = (a, b) => a < b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this._heap.length == 0;
    }

    peek() {
        return this._heap[top];
    }

    push(...values) {
        values.forEach(val => {
            this._heap.push(val);
            this._siftUp();
        })
        return this.size();
    }

    pop() {
        const poppedVal = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedVal;
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _siftUp() {
        let node = this.size() - 1;
        while(node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }

    _siftDown() {
        let node = top;
        while((left(node) < this.size() && this._greater(left(node), node)) || (right(node) < this.size() && this._greater(right(node), node))) {
            let maxChild = (right(node) < this.size()) && this._greater(right(node), left(node)) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }

    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
}

let A = [5, 17, 100, 11]
let pq = new PriorityQueue();
for (let i = 0; i < A.length; i++) {
    pq.push(A[i]);
}
let cost = 0;
while (pq.size() > 1) {
    let a = pq.pop();
    let b = pq.pop();
    let c = a + b;
    cost += c;
    pq.push(c);
}
console.log(cost);