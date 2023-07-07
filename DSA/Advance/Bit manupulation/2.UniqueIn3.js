// Q1. Every element is repeating thrice, but one element is repeating once
// Q2. Every element is repeating thrice, but one element is repeating twice
// Q3. Every element is repeating four times, but one element is repeating twice // Modify in the below code {count % 4 != 0}

let arr = [2, 2, 7, 3, 2, 3, 8, 7, 3, 7];
let ans = 0;
for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if ((arr[j] >> i) & 1) count++;
    }
    if (count % 3 != 0) ans = ans | 1 << i;
}
console.log(ans);