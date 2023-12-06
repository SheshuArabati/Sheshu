// Brute force algorithm
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let rotations = 22;
let length = rotations % arr.length;
for (let i = 0; i < length; i++) {
    let prev = arr[arr.length - 1];
    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j] + prev - (prev = arr[j]);
    }
}
console.log(arr);

// Using temp variable
arr = [1, 2, 3, 4, 5, 6, 7, 8];
rotations = 3;
length = rotatins % arr.length;
for (let i = 0; i < length; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
        arr[j] = arr[j - 1];
    }
    arr[0] = temp;
}
console.log(arr);

// Using temp array
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.length;
rotations = 4;
rotations = rotations % n;
let i;
let temp = [];
for (i = 0; i < rotations; i++) {
    temp.push(arr[n + i - rotations]);
}
for (i = arr.length - 1; i >= rotations; i--) {
    arr[i] = arr[i - rotations];
}
for (i = 0; i < rotations; i++) {
    arr[i] = temp[i];
}
console.log(arr);

// Using temp array - 2
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
n = arr.length;
rotations = 3;
rotations = rotations % n;
temp = [];
for (let i = 0; i < n; i++) {
    temp[(i + rotations) % n] = arr[i];
}
arr = temp;
console.log(arr);

// Using reversal
const swap = (arr, begin, end) => {
    while (begin < end) {
        arr[begin] = arr[begin] + arr[end] - (arr[end] = arr[begin]);
        begin++;
        end--;
    }
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n = arr.length;
rotations = 3;
let r = rotations % n;
swap(arr, 0, n - 1);
swap(arr, 0, r - 1);
swap(arr, r, n - 1);
console.log(arr);