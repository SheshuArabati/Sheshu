let arr = [34, 56, 78, 9, 65, 54, 32, 21, 45, 56, 87, 74, 73];
let obj = {};
let uniqueArr = [];
for (let i = 0; i < arr.length;  i++) {
    if (!obj[arr[i]]) uniqueArr.push(arr[i]);
    obj[arr[i]] = ++obj[arr[i]] || 1;
}
console.log(uniqueArr);