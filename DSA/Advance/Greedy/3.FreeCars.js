// Given two arrays, A and B of size N. A[i] represents the time by which you can buy the ith car without paying any money.
// B[i] represents the profit you can earn by buying the ith car. It takes 1 minute to buy a car, so you can only buy the ith car when the current time <= A[i] - 1.
// Your task is to find the maximum profit one can earn by buying cars considering that you can only buy one car at a time.

let A = [1, 3, 2, 3, 3];
let B = [5, 6, 1, 3, 9];
let pq = new PriorityQueue();
const sortedIndexes = [...new Array(A.length).keys()].sort((a, b) => A[a] - A[b]);
let time = 0;
for (let i = 0; i < A.length; i++) {
    if (A[sortedIndexes[i]] > time) {
        time++;
        pq.push(B[sortedIndexes[i]]);
    } else {
        if (B[sortedIndexes[i]] > pq.peek()) {
            pq.pop();
            pq.push(B[sortedIndexes[i]]);
        }
    }
}
let sum = 0;
let size = pq.size();
let mod = 1e9 + 7
for (let i = 0; i < size; i++) {
    sum = (sum + pq.pop()) % mod;
}
console.log(sum);

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
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }

    _siftDown() {
        let node = top;
        while ((left(node) < this.size() && this._greater(left(node), node)) || (right(node) < this.size() && this._greater(right(node), node))) {
            let maxChild = (right(node) < this.size()) && this._greater(right(node), left(node)) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }

    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
}