// Every element in an array occurs twice except for one. Find the unique element.
// Note:Duplicates are adjacent to each other

const findUnique = (arr) => {
    let n = arr.length;
    if (arr[0] != arr[1]) return arr[0];
    if (arr[n - 1] != arr[n - 2]) return arr[n - 1];
    let l = 0;
    let h = n - 1;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) return arr[mid];
        if (arr[mid] == arr[mid - 1]) mid = mid - 1;
        if (mid % 2 == 0) l = mid + 2;
        else h = mid - 1;
    }
    return -1;
}

let arr = [3, 3, 1, 1, 8, 8, 10, 10, 9, 6, 6, 2, 2, 4, 4];
console.log(findUnique(arr));