// Gievn N array elements and Q queries. Find freq of elements from the array

// Using object
let arr = [2, 6, 3, 8, 2, 8, 2, 3, 8, 10];
let Q = [2, 8, 3, 5];
let freq = {};
for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = ++freq[arr[i]] || 1;
}
for (let i = 0; i < Q.length; i++) {
    if (freq[Q[i]]) console.log(freq[Q[i]]);
    else console.log(0);
}

// Using Map
// let arr = [2, 6, 3, 8, 2, 8, 2, 3, 8, 10];
// let Q = [2, 8, 3, 5];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        let freq = map.get(arr[i]);
        map.set(arr[i], ++freq);
    } else {
        map.set(arr[i], 1);
    }
}
for (let i = 0; i < Q.length; i++) {
    if (map.has(Q[i])) {
        console.log(map.get(Q[i]));
    } else {
        console.log(0);
    }
}