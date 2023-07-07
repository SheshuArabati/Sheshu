// Given N arr elements, array contains all elements from [1, n+2] except 2 elements.
// Find those two missing elements.

let arr = [4, 3, 6, 1];
let i = 0;
while (i < arr.length) {
    if (arr[i] >= 1 && arr[i] < arr.length) {
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
let op = [];
for (let i = 1; i <= arr.length + 2; i++) {
    if (i < arr.length) {
        if (arr[i - 1] != i) {
            op.push(i);
            if (op.length == 2) break;
        }
    } else {
        if (op.length == 2) break;
        if (arr[arr.length - 1] != i) op.push(i);
    }
}
console.log(op);