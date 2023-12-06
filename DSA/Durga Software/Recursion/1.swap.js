let a = 76;
let b = 98;

// Method - 1
let temp = a;
a = b;
b = temp;

// Method - 2
a = a + b;
b = a - b;
a = a - b;

// Method - 3
a = a * b;
b = a / b;
a = a / b;

// Method - 4
a = a ^ b;
b = a ^ b;
a = a ^ b;

// Method - 5
a = a + b - (b = a);

console.log(a, b);