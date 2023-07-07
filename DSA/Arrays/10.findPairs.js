// Given char arr
// Calculate the no. of pairs (i, j) such that i < j and arr[i] == 'a' && arr[j] == 'g'
// Note: All chars are in lower case

// Idea-1
let arr = ['a', 'd', 'g', 'a', 'g', 'a', 'g', 'f', 'g'];
let count = 0;
for (let  i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == 'a' && arr[j] == 'g') count++;
    }
}
console.log(count);

// Idea-2
// let arr = ['a', 'd', 'g', 'a', 'g', 'a', 'g', 'f', 'g'];
// let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'a') {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] == 'g') count++;
        }
    }
}
console.log(count);

// Optimised
// let arr = ['a', 'd', 'g', 'a', 'g', 'a', 'g', 'f', 'g'];
// let count = 0;
let ans = 0;
for (let i = 0; i < arr.length;  i++) {
    if (arr[i] == 'a') count++;
    else if (arr[i] == 'g') ans += count;
}
console.log(ans);

// Optimised-2
// let arr = ['a', 'd', 'g', 'a', 'g', 'a', 'g', 'f', 'g'];
// let count = 0;
// let ans = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 'g') count++;
    else if (arr[i] == 'a') ans += count;
}
console.log(ans);