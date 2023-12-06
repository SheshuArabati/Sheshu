const power = (a, b) => {
    if (b === 1) return a;
    return a * power(a, --b);
}
console.log(power(5, 3));