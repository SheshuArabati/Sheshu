// Sort char array 

// Using inbuilt methods
let ch1 = ['t', 'd', 'y','a', 's', 'p', 'e'];
ch1 = ch1.sort((a, b) => a.localeCompare(b));
console.log(ch1);

// Without using inbuilt methods
let ch = ['z', 'd', 'a', 'b', 'c', 'a', 'z'];
let count = [];
for (let i = 0; i < 26; i++) {
    count[i] = 0;
}
for (let i = 0; i < ch.length; i++) {
    count[ch[i].charCodeAt(0) - 97]++;
}
let index =  0;
for (let i = 0; i < 26; i++) {
    for (let j = 0; j < count[i]; j++) {
        ch[index] = String.fromCharCode(i + 97);
        index++;
    }
}
console.log(ch);