// Given arr elements, calculate no. of triplets i, j, k.
// Such that i < j < k and arr[i] < arr[j] < arr[k]

let arr = [4, 1, 2, 6, 9, 7];
let ans = 0;
for (let i = 0; i < arr.length; i++) {
    let l = 0;
    let r = 0;
    for (let j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i]) l++;
    }
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) r++;
    }
    ans += (l * r);
}
console.log(ans);