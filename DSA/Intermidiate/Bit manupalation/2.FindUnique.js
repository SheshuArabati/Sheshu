// Find unique element from given array

let arr = [6, 9, 3, 9, 6];
let val = 0;
for (let i = 0; i < arr.length; i++) {
    val = val ^ arr[i];
}
console.log(val);