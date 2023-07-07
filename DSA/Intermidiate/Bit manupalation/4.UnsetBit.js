// Unset the i th bit of a given number if it is set, otherwise do nothing.

let num = 45;
let i = 2;
let check = false;
if ((num & (1 << i)) == (1 << i)) check = true;
if (check) num = num ^ (1 << i);
console.log(num);