// Print all valid parenthesis of length 2N for a given value

const params = (n, str, openCount, closeCount) => {
    if (str.length == 2 * n) {
        console.log(str);
        return;
    }
    if (openCount < n) {
        params(n, str + "(", ++openCount, closeCount);
    }
    if (closeCount < openCount) {
        params(n, str + ")", openCount, ++closeCount);
    }
}

params(8, "", 0, 0)

// Another way

const solve = (n, str) => {
    if (str.length == 2 * n) return str;
    return solve(n, str + "()");
}

console.log(solve(4, ""));