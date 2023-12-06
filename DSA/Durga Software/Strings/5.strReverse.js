// Using inbuilt methods
let str = "the quick brown fox jumps over the lazy dog";
str = str.split("").reverse().join().replaceAll(",", "");
console.log(str);

// Without using inbuilt methods
str = "Happy";
let op = "";
for (let i = str.length - 1; i >= 0; i--) {
    op += str.charAt(i);
}
console.log(op);