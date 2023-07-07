// Check palindrome

const checkPlaindrome = (ch, s, e) => {
    if (s >= e) return true;
    else if (ch[s] == ch[e]) return checkPlaindrome(ch, ++s, --e);
    return false;
}

let ch = ['g', 'o', 'o', 'd', 'd', 'a', 'd'];
console.log(checkPlaindrome(ch, 4, 6));