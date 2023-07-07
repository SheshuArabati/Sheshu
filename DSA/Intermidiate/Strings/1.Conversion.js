// Convert upper case to lower case and viceversa

let ch = ['s', 'h', 'E', 'S', 'h', 'U'];
for (let i = 0; i < ch.length; i++) {
    if (ch[i].charCodeAt(0) >= 65 && ch[i].charCodeAt(0) <= 90) {
        ch[i] = String.fromCharCode(ch[i].charCodeAt(0) + 32);
    } else {
        ch[i] = String.fromCharCode(ch[i].charCodeAt(0) - 32);
    }
}
console.log(ch);