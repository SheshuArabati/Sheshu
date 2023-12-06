// Russian Doll Envelops
// Find maximum count of envelops that can be placed in a single envelop

const findIndex = (seq, val) => {
    let l = 0;
    let h = seq.length - 1;
    let ans = -1;
    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        if (seq[m] >= val) {
            ans = m;
            h = m - 1;
        } else {
            l = m + 1;
        }
    }
    return ans;
}

let height = [9, 5, 10, 3, 4, 2];
let weight = [3, 4, 8, 2, 3, 7];
let arr = [];
for (let i = 0; i < height.length; i++) {
    arr.push({
        height: height[i],
        weight: weight[i]
    })
}
arr = arr.sort((a, b) => a.height - b.height);
let seq = [arr[0].weight];
for (let i = 1; i < arr.length; i++) {
    if (arr[i].weight > seq[seq.length - 1]) {
        seq.push(arr[i].weight);
    } else {
        let idx = findIndex(seq, arr[i].weight);
        seq[idx] = arr[i].weight;
    }
}
console.log(seq.length);