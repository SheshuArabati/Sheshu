// WAP to check whether all the english alphabets are present in it or not.

let str = "the quick brown fox jumps over the lazy dog";
let isPangram = true;
for (let i = 97; i <= 122; i++) {
    let char = String.fromCharCode(i);
    if (str.indexOf(char) < 0) {
        console.log(char, str.indexOf(char));
        isPangram = false;
        break;
    }
}
console.log(isPangram ? "It is a pangram": "Not a pangram");