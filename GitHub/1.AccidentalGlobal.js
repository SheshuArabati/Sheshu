// Accidental global
// 'y' became global variable here

const foo = () => {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);