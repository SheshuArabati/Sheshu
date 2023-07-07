// Given N boards with it's length
// A painter takes T unit of time to paint one unot of board
// A board can only be painted by one painter
// A painter can only paint boards placed next to each other
// Find min no of painters required to paint all boards in X unit of time
// Return -1 ifnot possible

const partition = (boards, timeForOne, totalTime) => {
    let x = totalTime;
    let painters = 1;
    for (let i = 0; i < boards.length; i++) {
        if (boards[i] * timeForOne > totalTime) return -1;
        if (boards[i] * timeForOne <= x) {
            x -= (boards[i] * timeForOne);
        } else {
            painters++;
            x = totalTime - (boards[i] * timeForOne);
        }
    }
    return painters;
}

let boards = [5, 3, 6, 1, 9];
let timeForOne = 2;
let totalTime = 20;
  console.log(partition(boards, timeForOne, totalTime));