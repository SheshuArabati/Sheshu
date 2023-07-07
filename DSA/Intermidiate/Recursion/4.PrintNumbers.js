// Print numbers in ascending order

const printNumbers = (n) => {
    if (n == 1) {
        console.log(1);
        return;
    }
    printNumbers(n - 1);
    console.log(n);
}

printNumbers(7);