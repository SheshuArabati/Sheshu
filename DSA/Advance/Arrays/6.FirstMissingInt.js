// Find the first missing natural number (or) first missing positive integer

// BF approach
let arr = [-7, 4, 3, 6, 5, 1, 2];
let val = 0;
for (let i = 1; i <= arr.length + 1; i++) {
    let isFound = false;
    for (let j = 0; j < arr.length; j++) {
        if (i == arr[j]) {
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        val = i;
        break;
    }
}
console.log(val);


// Using HashSet

// let arr = [7, 4, 3, 6, 5, 1, 2];
let set = new Set();
for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
}
for (let i = 1; i <= arr.length + 1; i++) {
    if (!set.has(i)) {
        console.log(i);
        break;
    }
}


// Using Sort

// let arr = [7, 4, 3, 6, 5, 1, 2];
arr = arr.sort((a, b) => a - b);
// let val = 1;
let i = 0;
while (i < arr.length) {
    if (arr[i] < 1) {
        i++;
        continue;
    }
    if (arr[i] == val) val++;
    else if (arr[i] == val - 1) continue;
    else break;
    i++;
}
console.log(val);


// Optimised

// let arr = [-7, -4, 3, 6, 5, 1, 2];
// let i = 0;
while (i < arr.length) {
    if (arr[i] >= 1 && arr[i] <= arr.length) {
        let curr = arr[i] - 1;
        if (arr[i] != arr[curr]) {
            let temp = arr[i];
            arr[i] = arr[curr];
            arr[curr] = temp;
        } else {
            i++;
        }
    } else {
        i++;
    }
}
for (let i = 0; i < arr.length + 1; i++) {
    if (arr[i] != i + 1) {
        console.log(i + 1);
        break;
    }
}