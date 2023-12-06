const convert = (n) => {
    if (n === 0) return 0;
    return (n % 2) + (10 * convert(Math.floor(n / 2)));
}
console.log(convert(11));