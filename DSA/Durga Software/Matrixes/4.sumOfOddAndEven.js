let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let sumOfEven = 0;
let sumOfOdd = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] % 2 === 0 ? sumOfEven += arr[i][j] : sumOfOdd += arr[i][j];
    }
}
console.log("Sum of even elements: " + sumOfEven);
console.log("Sum of odd elements: " + sumOfOdd);