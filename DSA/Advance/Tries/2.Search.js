// Search given word from a trie

const search = (root, word) => {
    let curr = root;
    for (let i = 0; i < word.length; i++) {
        let idx = word[i].charCodeAt(0) - 97;
        if (curr.children[idx] == null) {
            return false;
        }
        curr = curr.children[idx];
    }
    return curr.eow;
}

let word = "play";
search(root, word);