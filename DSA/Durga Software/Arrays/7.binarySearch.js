let arr = [34, 56, 78, 87, 65, 43, 21];
arr.sort((a, b) => a - b);
let element = 56, index = -1;
let low = 0, mid = 0, high = arr.length - 1;
while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === element) {
        index = mid;
        break;
    } else if (arr[mid] > element) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
index === -1 ? console.log("Element not found") : console.log("Element found at index:", index)