// Given an arr, print all subarrays

let arr = [2, 8, -1, 4];
let str = "";
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        for (let k = i; k <= j; k++) {
            str += arr[k] + " ";
        }
        str += "\n";
    }
}
console.log(str);