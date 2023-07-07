// Reverse an array between starting and ending indexes

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let si = 4;
let ei = 7;
while (si < ei) {
    arr[si] = arr[si] + arr[ei] - (arr[ei] = arr[si]);
    si++;
    ei--;
}
console.log(arr);