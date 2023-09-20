/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    console.table(board);

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            let count = getLiveNeighborsCount(board, i, j);
            if(board[i][j] == 1 && (count<2 || count>3)){
                board[i][j] = 3; //introducing new state. 3 should be treated as 1
            }else if(board[i][j] == 0 && count == 3){
                board[i][j] = 4; //introducing new state. 4 should be treated as 0
            }
        }
    }

    console.table(board);

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] == 3)
                board[i][j] = 0;
            if(board[i][j] == 4)
                board[i][j] = 1;
        }
    }

    console.table(board);
    
};

var getLiveNeighborsCount = function(board,x,y) {
    let count=0;
    for(let i=-1; i<=1; i++){
        for(let j=-1; j<=1; j++){
            if(x+i >= 0 && y+j >= 0 && x+i < board.length && y+j < board[0].length)
                if(board[x+i][y+j] %2 == 1)
                    count++;
        }
    }
    return count - board[x][y];
}

gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]);