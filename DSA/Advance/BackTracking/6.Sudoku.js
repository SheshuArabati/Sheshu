// Write a program to solve a Sudoku puzzle by filling the empty cells. Empty cells are indicated by the character '.' 
// You may assume that there will be only one unique solution.

const isValid = (mat, row, col, val) => {
    for (let i = 0; i < mat.length; i++) {
        if (mat[row][i] == val || mat[i][col] == val) return false;
    }
    row = row - (row % 3);
    col = col - (col % 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mat[row + i][col + j] == val) return false;
        }
    }
    return true;
}

const sudoku = (mat, i, j) => {
    if (j == 9) {
        i = i + 1;
        j = 0;
    }
    if (i == 9) return mat;
    if (mat[i][j] != ".") {
        let ans = sudoku(mat, i, j + 1);
        if (ans) return ans;
    } else {
        for (let x = 1; x <= 9; x++) {
            if (isValid(mat, i, j, x)) {
                mat[i] = mat[i].replace('.', x);
                let ans = sudoku(mat, i, j + 1);
                if (ans) return ans;
                mat[i] = mat[i].replace(x, '.');
            }
        }
    }
}

let A = [ "53..7....", "6..195...", ".98....6.", "8...6...3", "4..8.3..1", "7...2...6", ".6....28.", "...419..5", "....8..79" ];
console.log(sudoku(A, 0, 0));