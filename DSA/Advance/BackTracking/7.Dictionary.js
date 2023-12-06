// Given a string A and a dictionary of words B, 
// determine if A can be segmented into a space-separated sequence of one or more dictionary words.

const findWord = (dict, word) => {
    if (word.length == 0) return true;
    for (let i = 1; i <= word.length; i++) {
        let prefix = word.substring(0, i);
        if (dict.has(prefix)) {
            let ans = findWord(dict, word.substring(i));
            if (ans) return true;
        }
    }
    return false;
}

let A = "myinterviewtrainer";
let B = ["trainer", "my", "interview"];
let dict = new Set();
for (let i = 0; i < B.length; i++) {
    dict.add(B[i]);
}
console.log(findWord(dict, A));