// Q1. Every element is repeating twice, but one element is repeating once
// Q2. Every element is repeating four times, but one element is repeating once
// Q3. Every element is repeating four times, but one element is repeating thrice

let arr = [2, 2, 7, 3, 7, 8, 3];
let val = 0;
for (let i = 0; i < arr.length; i++) {
    val ^= arr[i];
}
console.log(val);