// Tower of Hanoi
// There are n disks placed on tower A of different sizes
// Move all the disks from tower A to tower C using tower B if needed
// Only 1 disk canbe moved at a time
// Larger disk can't be placed on small disk at any step
// Print the movement of disks from A to C in minimum steps

const TOH = (n, A, B, C) => {
    if (n == 0) return;
    TOH(n - 1, A, C, B);
    console.log(n, ":", A, "->", C);
    TOH(n - 1, B, A, C);
}

TOH(3, 'A', 'B', 'C');