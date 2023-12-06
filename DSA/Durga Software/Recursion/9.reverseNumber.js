const reverse = (n, len) => {
    if (n === 0) return 0;
    return (n % 10) * (10 ** (len -1)) + reverse(Math.floor(n / 10), --len);
}
console.log(reverse(12345, 5));