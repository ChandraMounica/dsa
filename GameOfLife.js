/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    let next = Array(board.length).fill().map(() => Array(board[0].length));

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            let count = getLiveNeighborsCount(board, i, j);
            if(board[i][j] == 1 && (count<2 || count>3)){
                next[i][j] = 0;
            }else if(board[i][j] == 0 && count == 3){
                next[i][j] = 1;
            }else {
                next[i][j] = board[i][j];
            }
        }
    }

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            board[i][j] = next[i][j];
        }
    }

    console.table(board);
    
};

var getLiveNeighborsCount = function(board,x,y) {
    let count=0;
    for(let i=-1; i<=1; i++){
        for(let j=-1; j<=1; j++){
            if(x+i >= 0 && y+j >= 0 && x+i < board.length && y+j < board[0].length)
                if(board[x+i][y+j] == 1)
                    count++;
        }
    }
    return count - board[x][y];
}

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);