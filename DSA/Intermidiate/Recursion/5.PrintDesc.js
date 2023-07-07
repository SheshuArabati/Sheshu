// Print numbers in descending order

const printNumbers = (n) => {
    if (n == 0) return;
    console.log(n);
    printNumbers(--n);
}

printNumbers(6);