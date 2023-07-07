// Count no. of factors for 1 to N;

let n = 50;
let arr = [];
for (let i = 0; i < n + 1; i++) {
    arr[i] = i;
}
for (let i = 2; i * i < n; i++) {
    if (arr[i] == i) {
        for (let j = i * i; j < arr.length; j += i) {
            if (arr[j] == j) arr[j] = i;
        }
    }
}
for (let i = 0; i < n; i++) {
    let map = new Map();
    let x = i;
    while (x > 1) {
        map.set(arr[x], (map.get(arr[x]) || 0) + 1);
        x = Math.floor(x / arr[x]);
    }
    let ans = 1;
    for (let key of map.keys()) {
        let val = map.get(key) + 1;
        ans *= val;
    }
    console.log(i, ans);
}