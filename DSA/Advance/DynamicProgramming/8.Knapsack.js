// Given N cakes with their happiness and weight. 
// Find max total hapiness that can be kept in a bag with capacity W.

let hp = [3, 8, 10, 2, 5];
let wt = [10, 4, 20, 8, 15];
let cap = 40;
let arr = [];
for (let i = 0; i < hp.length; i++) {
    let val = hp[i]/wt[i];
    arr.push({
        ratio: val,
        hp: hp[i],
        wt: wt[i]
    })
}
arr = arr.sort((a, b) => b.ratio - a.ratio);
let ans = 0;
for (let i = 0; i < arr.length; i++) {
    if (cap >= arr[i].wt) {
        ans += arr[i].hp;
        cap -= arr[i].wt;
    } else {
        if (cap > 0) {
            ans += arr[i].ratio * cap;
        }
        break;
    }
}
console.log(ans);