/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    let helperSet = new Set();

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] != ".") {

                let row = `${board[i][j]} in row ${i}`;
                let col = `${board[i][j]} in col ${j}`;
                let cubeNum = Math.floor(i/3)*3+Math.floor(j/3);
                let cube = `${board[i][j]} in cube ${cubeNum}`;

                if(helperSet.has(row) || helperSet.has(col) || helperSet.has(cube))
                    return false;

                helperSet.add(row);
                helperSet.add(col);
                helperSet.add(cube);

            }
        }
    }

    return true;
    
};