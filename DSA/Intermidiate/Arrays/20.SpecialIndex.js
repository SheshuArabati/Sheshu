// An index is said to be special index, if after deleting that index 
// "sum of even indices elements == sum of odd indices elements"

let arr = [4, 3, 2, 7, 6, -2];
let peven = []; 
peven[0] = arr[0];
let podd = [];
podd[0] = 0;
for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 0) {
        peven[i] = peven[i - 1] + arr[i];
        podd[i] = podd[i - 1];
    } else {
        podd[i] = podd[i - 1] + arr[i];
        peven[i] = peven[i - 1];
    }
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let evenSum = podd[arr.length - 1] - podd[i];
    let oddSum = peven[arr.length - 1] - peven[i];
    if (i > 0) {
        evenSum += peven[i - 1];
        oddSum += podd[i - 1]
    }
    if (evenSum == oddSum) count++;
}
console.log(count);