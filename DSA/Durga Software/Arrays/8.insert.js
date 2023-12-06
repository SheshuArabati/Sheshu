const insertElement = (arr, e, index) => {
    let op = [];
    for (let i = 0; i < index; i++) {
        op.push(arr[i]);
    }
    op.push(e);
    for(let i = index; i < arr.length; i++) {
        op.push(arr[i]);
    }
    return op;
}

let arr = [2, 5, 8, 34, 76];
let element = 17, index = 3;
console.log(insertElement(arr, element, index));