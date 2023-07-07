// Right rotation 

// Simplest
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let rotations1 = 3;
rotations1 = rotations1 % arr1.length;
let ans = [];
for (let i = 0; i < arr1.length - rotations1; i++) {
    ans[rotations1 + i] = arr1[i];
}
let c = 0
for (let i = arr1.length - rotations1; i < arr1.length; i++) {
    ans[c] = arr1[i];
    c++;
}
console.log(ans);


// Optimised
const reversePart = (arr, si, ei) => {
    while (si < ei) {
        arr[si] = arr[si] + arr[ei] - (arr[ei] = arr[si]);
        si++;
        ei--;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let rotations = 3;
rotations = rotations % arr.length;
reversePart(arr, 0, arr.length - 1);
reversePart(arr, 0, rotations - 1);
reversePart(arr, rotations, arr.length - 1);
console.log(arr);