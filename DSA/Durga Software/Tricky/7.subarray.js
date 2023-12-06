// Count no of sub-arrays with 0

let arr = [1, 3, 0, 0, 2, 0, 0, 4];
let ans = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        count++;
    } else {
        ans += count * (count + 1) / 2;
        count = 0;
    }
}
if (count) ans += count * (count + 1) / 2;
console.log(ans);


// Recursion
const calculateSubArray = (arr, i, count) => {
    if (i == arr.length) return count * (count + 1) / 2;
    if (arr[i] == 0) return calculateSubArray(arr, ++i, ++count);
    return count * (count + 1) / 2 + calculateSubArray(arr, ++i, 0);
}

let array = [2, 0, 0, 5, 0, 0, 0, 7, 0, 6, 0, 0];
console.log(calculateSubArray(array, 0, 0));