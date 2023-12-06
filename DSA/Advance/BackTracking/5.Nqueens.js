// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

const nQueens = (mat, n, cols, diagonals, antidiagonals, i) => {
    if (i == n) {
        let str = "";
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                str += mat[r][c];
            }
            if (r != n - 1) str += " ";
        }
        op.push(str);
    }
    for (let j = 0; j < n; j++) {
        if (cols[j] == false && diagonals[i + j] == false && antidiagonals[i - j + n - 1] == false) {
            cols[j] = true;
            diagonals[i + j] = true;
            antidiagonals[i - j + n - 1] = true;
            mat[i][j] = "Q"
            nQueens(mat, n, cols, diagonals, antidiagonals, i + 1);
            cols[j] = false;
            diagonals[i + j] = false;
            antidiagonals[i - j + n - 1] = false;
            mat[i][j] = ".";
        }
    }
}

let A = 4;
let mat = new Array(A).fill().map(() => new Array(A).fill("."));
let cols = new Array(A).fill(false);
let diagonals = new Array((2 * A) - 1).fill(false);
let antidiagonals = new Array((2 * A) - 1).fill(false);
let op = [];
nQueens(mat, A, cols, diagonals, antidiagonals, 0);
console.log(op);