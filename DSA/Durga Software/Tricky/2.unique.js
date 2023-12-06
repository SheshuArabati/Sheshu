// Display first unique element

let str = "abababababadc";
let unique = "";
for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
        if (str.charAt(i) === str.charAt(j)) count++;
    }
    if (count === 1) {
        unique = str.charAt(i);
        break;
    }
}
console.log(unique);