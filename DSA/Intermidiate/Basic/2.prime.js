let num = 19;
let count = 0;
for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
        if (i * i == num) {
            count += 1;
        } else {
            count += 2;
        }
    }
}
if (count == 2) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}