// Count no. of set bits in a given number

let num = 45;
let count = 0;
while (num > 0) {
    if ((num & 1) == 1) count++;
    num = num >> 1;
}
console.log(count);