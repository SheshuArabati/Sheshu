// Given a string, calculate length of longest palindromic substring

const checkPalindrome = (ch, i, j) => {
    while (i >= 0 && j < ch.length && ch[i] == ch[j]) {
        i--;
        j++;
    }
    return j - i - 1;
}

let ch = ['a', 'b', 'a', 'c', 'a', 'b', 'd', 'm', 'a', 'l', 'a', 'y', 'y', 'a', 'l', 'a', 'm'];
let len = 0;
for (let i = 0; i < ch.length; i++) {
    let p1 = i;
    let p2 = i;
    let slen = checkPalindrome(ch, p1, p2);
    if (slen > len) len = slen;
}
for (let i = 0; i < ch.length; i++) {
    let p1 = i;
    let p2 = i + 1;
    let slen = checkPalindrome(ch, p1, p2);
    if (slen > len) len = slen;
}
console.log(len);