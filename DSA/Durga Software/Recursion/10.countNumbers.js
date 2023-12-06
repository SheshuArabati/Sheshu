const count = (n) => {
    if (n === 0) return 0;
    return 1 + count(Math.floor(n / 10));
}
console.log(count(12345));