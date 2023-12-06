const isPalindrome = (str, index, length) => {
    if (index >= length) return true;
    else if (str.charAt(index).toLowerCase() === str.charAt(length).toLowerCase()) return isPalindrome(str, ++index, --length);
    return false;
}

let str = "Madam Arora is an expert in English and Malayalam"
let arr = str.split(" ");
let op = [];
for (let i = 0; i < arr.length; i++) {
    isPalindrome(arr[i], 0, arr[i].length - 1) && op.push(arr[i]);
}
let highestPalindrome = op[0];
for (let i = 1; i < op.length; i++) {
    if (highestPalindrome.length < op[i].length) highestPalindrome = op[i];
}
console.log(highestPalindrome);