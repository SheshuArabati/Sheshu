const isPalindrome = (str, index, len) => {
    if (index >= len) return true;
    else if (str.charAt(index) === str.charAt(len)) return isPalindrome(str, ++index, --len);
    return false;
}
console.log(isPalindrome("racecar", 0, 6) ? "Palindrome" : "Not a palindrome");