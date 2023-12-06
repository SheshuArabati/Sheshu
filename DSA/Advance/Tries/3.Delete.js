// Delete given word from the trie

const deleteNode = (root, word) => {
    let curr = root;
    let temp = root;
    let nc = "";
    for (let i = 0; i < word.length; i++) {
        let count = 0;
        for (let j = 0; j < 26; j++) {
            if (curr.children[j] != null) {
                count++;
            }
        }
        if (count > 1 || curr.eow == true) {
            temp = curr;
            nc = word[i];
        }
        let idx = word[i].charCodeAt(0) - 97;
        curr = curr.children[idx];
    }
    curr.eow = false;
    count = 0;
    for (let i = 0; i < 26; i++) {
        if (curr.children[i] != null) {
            count++;
        }
    }
    if (count > 0) return;
    let idx = nc.charCodeAt(0) - 97;
    temp.children[idx] = null;
}

let word = "trimmer";
deleteNode(root, word);