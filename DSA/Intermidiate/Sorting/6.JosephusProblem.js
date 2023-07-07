// N people are standing in a circle. Person 1 has knife he kills the next alive person in clockwise 
// direction and passes on the knife to next person in clockwise direction.
// Repeat the process until a single person is alive. Find the last person standing?

let num = 100;
let x = 2;
for (let i = 0; i < num; i++) {
    if ((x * 2) > num) break;
    else x *= 2;
}
console.log(1 + ((num - x) * 2));