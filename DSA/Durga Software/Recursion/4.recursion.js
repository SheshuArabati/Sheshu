const recursion = (n) => {
    if (n > 0) {
        console.log(n);
        recursion(--n);
    }
}
recursion(10);