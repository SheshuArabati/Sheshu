// Brute force algorithm
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let rotations = 42;
let length = rotations % arr.length;
for (let i = 0; i < length; i++) {
    let prev = arr[0];
    for (let j = arr.length - 1; j >= 0; j--) {
        arr[j] = arr[j] + prev - (prev = arr[j]);
    }
}
console.log(arr);

// Using temp variable
arr = [34, 56, 78, 65, 43, 21, 23];
rotations = 2;
rotations = rotations % arr.length;
for (let i = 0; i < rotations; i++) {
    let temp = arr[0];
    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = temp;
}
console.log(arr);

// Using temp array
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp = [];
let i; 
rotations = 5;
rotations = rotations % arr.length;
for (i = 0; i < rotations; i++) {
    temp.push(arr[i]);
}
for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i + rotations];
}
for (i = 0; i < rotations; i++) {
    arr[i + arr.length - rotations] = temp[i];
}
console.log(arr);

// Using temp array - 2
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.length;
rotations = 3;
rotations = rotations % n;
temp = [];
for (let i = 0; i < n; i++) {
    temp[i] = arr[(i + rotations) % n];
}
arr = temp;
console.log(arr);

// Using reversal method
const swap = (arr, start, end) => {
    while (start <= end) {
        arr[start] = arr[start] + arr[end] - (arr[end] = arr[start]);
        start++;
        end--;
    }
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n = arr.length;
rotations = 4;
rotations = rotations % n;
swap(arr, 0, rotations - 1);
swap(arr, rotations, n - 1);
swap(arr, 0, n - 1);
console.log(arr);