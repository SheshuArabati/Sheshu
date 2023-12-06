const getData = (arr, op) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length) getData(arr[i], op);
        else op.push(arr[i]);
    }
    return op;
}

let arr = [[1, 2, 3], [4, 5, 6], 8, 9];
let op = [];
console.log(getData(arr, op));