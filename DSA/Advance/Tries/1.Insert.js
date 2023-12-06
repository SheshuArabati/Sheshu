// Insert word into a trie

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
        this.eow = false;
    }
}

const insert = (root, word) => {
    let curr = root;
    for (let i = 0; i < word.length; i++) {
        let idx = word[i].charCodeAt(0) - 97;
        if (curr.children[idx] == null) {
            curr.children[idx] = new Node(word[i]);
        }
        curr = curr.children[idx];
    }
    curr.eow = true;
    return root;
}

let word = "play";
let root = insert(new Node(0), word);