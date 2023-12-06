let str = "SHesHu";
let op = "";
for (let i = 0; i < str.length; i++) {
    str.charAt(i).toLowerCase() === str.charAt(i) ? op += str.charAt(i).toUpperCase() : op += str.charAt(i).toLowerCase();
}
console.log(op);