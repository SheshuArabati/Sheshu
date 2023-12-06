// Merge sort

const merge = (arr, s, m, e) => {
    let p1 = s;
    let p2 = m + 1;
    let op = [];
    while (p1 <= m && p2 <= e) {
        if (arr[p1] < arr[p2]) {
            op.push(arr[p1]);
            p1++;
        } else {
            op.push(arr[p2]);
            p2++;
        }
    }
    while (p1 <= m) {
        op.push(arr[p1]);
        p1++;
    }
    while (p2 <= e) {
        op.push(arr[p2]);
        p2++;
    }
    let j = 0;
    for (let i = s; i <= e; i++) {
        arr[i] = op[j];
        j++;
    }
}

const mergeSort =  (arr, s, e) => {
    if (s == e) return;
    let m = Math.floor((s + e) / 2);
    mergeSort(arr, s, m);
    mergeSort(arr, m + 1, e);
    merge(arr, s, m, e);
}

let arr = [3, 6, 8, 10, 15, 2, 12, 17, 18];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);