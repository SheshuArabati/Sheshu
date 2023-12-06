// WAP to check str1 chars are present in str2 or not and vice versa.

let str1 = "race";
let str2 = "care";
if (str1.length === str2.length) {
    str1 = str1.split('');
    str2 = str2.split('');
    str1.sort();
    str2.sort();
    let isAnagram = true;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            isAnagram = false;
            break;
        }
    }
    console.log(isAnagram ? "It is an anagram.": "Not an anagram.");
} else {
    console.log("Not an anagram.");
}