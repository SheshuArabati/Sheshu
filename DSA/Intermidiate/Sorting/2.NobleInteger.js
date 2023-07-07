// Find count of noble integers in an arr of size N
// A noble integer is such that arr[i] = no. of elements smaller than arr[i]

let arr = [-3, -2, 2, 2, 3];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let smCount = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[i]) smCount++;
    }
    if (smCount == arr[i]) count++;
}
console.log(count);