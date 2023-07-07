//Given N array elements. Check if their exists a pair (i, j) such that arr[i] + arr[j] = k & i != j

// Brute force (or) Simplest
let arr1 = [3, -2, 1, 4, 3, 6, 8];
let k1 = 10;
let found1 = false;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (i != j && arr1[i] + arr1[j] == k1) {
            found1 = true;
            break;
        }
    }
    if (found1) break;
}
console.log(found1 ? true : false);

//Optimised
let arr2 = [-2, 3, 4];
let k2 = 6;
let found2 = false;
for (let i = 1; i < arr2.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr2[i] + arr2[j] == k2) {
            found2 = true;
            break;
        }
    }
    if (found2) break;
}
console.log(found2 ? true : false);