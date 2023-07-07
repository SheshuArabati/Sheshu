// Given an array, find the length of smallest subarray.
// Which contains both min & max of an array.

let arr = [3, 5, 7, 9, 5, 1, 5, 7, 1, 4, 6, 9, 7, 3];
let min = arr[0];
let max = arr[0];
let count = arr.length;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    else if (arr[i] < min) min = arr[i];
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == min) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] == max) {
                let length = j - i + 1;
                count = count > length ? length : count;
            }
        }
    }
    if (arr[i] == max) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] == min) {
                let length = j - i + 1;
                count = count > length ? length : count;
            }
        }
    }
}
console.log(count);

// Optimised
// let arr = [3, 5, 7, 9, 5, 1, 5, 7, 1, 4, 6, 9, 7, 3];
// let min = arr[0];
// let max = arr[0];
// let mini = -1;
// let maxi = -1;
// let count = arr.length;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    else if (arr[i] < min) min = arr[i];
}
if (min == max) {
    console.log(1);
} else {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == min) {
            mini = i;
            if (maxi != -1) {
                let len = mini - maxi + 1;
                count = count > len ? len : count;
            }
        } else if (arr[i] == max) {
            maxi = i;
            if (mini != -1) {
                let len = maxi - mini + 1;
                count = count > len ? len : count;
            }
        }
    }
    console.log(count);
}

//Optimised-2
// let arr = [3, 5, 7, 9, 6, 5, 7, 1, 1, 4, 6, 6, 7, 3];
// let min = arr[0];
// let max = arr[0];
// let mini = -1;
// let maxi = -1;
// let count = arr.length;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        count = arr.length;
    }
    else if (arr[i] < min) {
        min = arr[i];
        count = arr.length;
    }
    if (arr[i] == min) {
        mini = i;
        if (maxi != -1) {
            let len = mini - maxi + 1;
            count = count > len ? len : count;
        }
    } else if (arr[i] == max) {
        maxi = i;
        if (mini != -1) {
            let len = maxi - mini + 1;
            count = count > len ? len : count;
        }
    }
}
console.log(min == max ? 1 : count);