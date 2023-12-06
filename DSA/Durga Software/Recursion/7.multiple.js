const multiple = (a, b) => {
    if (a > b) return multiple(b, a);
    else if (b === 1) return a;
    return a + multiple(a, --b);
}
console.log(multiple(5, 6));