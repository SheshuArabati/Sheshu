// Count the occurrence of keys and convert the result into array of objects 
// where each object belongs to one key and it's occurrence (count).

let arr = [{ language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].language]) obj[arr[i].language] = 1;
    else ++obj[arr[i].language];
}
let op = [];
for (let key in obj) {
    op.push({language: key, count: obj[key]});
}
console.log(op);