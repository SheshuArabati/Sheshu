// Sort the integer array w.r.t Kth digit of the number

const powerMod = (a, n) => {
    if (n == 0) return 1;
    let y = powerMod(a, Math.floor(n / 2));
    if (n % 2 == 0) return y * y;
    return y * y * a;
}

let arr = [361, 432, 12, 78, 500, 112, 6];
let k = 1;
let op = [];
for (let i = 0; i < arr.length; i++) {
    let val = Math.floor(arr[i] / powerMod(10, k)) % 10;
    if (op[val]) op[val].push(arr[i]);
    else op[val] = [arr[i]];
}
let c = 0;
for (let i = 0; i < op.length; i++) {
    if (op[i]) {
        for (let j = 0; j < op[i].length; j++) {
            arr[c] = op[i][j];
            c++;
        }
    }
}
console.log(arr);