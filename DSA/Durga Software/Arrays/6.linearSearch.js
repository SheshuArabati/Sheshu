let arr = [34, 45, 9, 1, 2, 6, 3];
let element = 2, index = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) index = i;
}
index === -1 ? console.log("Element not found") : console.log("Element found at index:", index)