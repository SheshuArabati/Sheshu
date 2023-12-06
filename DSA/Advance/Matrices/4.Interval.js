// Given N overlapping intervals & they are sorted based on start time. 
// You are given a new interval merge the new interval & make all the non lapping intervals.

const mergeInterval = () => {
    let arr = [[1, 3], [4, 7], [10, 14], [16, 19], [21, 24], [27, 30], [32, 35]];
    let I = [10, 22];
    let op = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i][0] > I[1]) {
            op.push(I);
            for (let j = i; j < arr.length; j++) {
                op.push(arr[j]);
            }
            return op;
        } else if (arr[i][1] < I[0]) {
            op.push(arr[i]);
        } else {
            I[0] = arr[i][0] < I[0] ? arr[i][0] : I[0];
            I[1] = arr[i][1] > I[1] ? arr[i][1] : I[1];
        }
        i++;
    }
    op.push(I);
    return op;
}

console.log(mergeInterval());