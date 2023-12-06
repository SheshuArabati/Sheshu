// Given a list of N words, find the shortest unique prefix to represent each word in the list.

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
        this.freq = 1;
        this.eow = false;
    }
}

const createRoot = (root, arr) => {
    let curr = root;
    for (let i = 0; i < arr.length; i++) {
        curr = root;
        let word = arr[i];
        for (let j = 0; j < word.length; j++) {
            let idx = word[j].charCodeAt(0) - 97;
            if (curr.children[idx] == null) {
                let nn = new Node(word[j]);
                curr.children[idx] = nn;
            } else {
                curr.children[idx].freq++;
            }
            curr = curr.children[idx];
        }
        curr.eow = true;
    }
    return root;
}

const getPrefix = (root, arr) => {
    let ans = [];
    let curr = root;
    for (let i = 0; i < arr.length; i++) {
        curr = root;
        let word = arr[i];
        let str = "";
        for (let j = 0; j < word.length; j++) {
            let idx = word[j].charCodeAt(0) - 97;
            str += word[j];
            if (curr.children[idx] == null || curr.children[idx].freq == 1) break;
            curr = curr.children[idx];
        }
        ans.push(str);
    }
    return ans;
}

let arr = ["den", "zebra", "dog", "duck", "dove"];
let root = createRoot(new Node(0), arr);
console.log(getPrefix(root, arr));