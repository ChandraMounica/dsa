/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    for(let i=0; i<matrix.length; i++) {
        for(let j=i+1; j<matrix.length; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }

    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix.length/2; j++){
            [matrix[i][j],matrix[i][matrix.length-j-1]] = [matrix[i][matrix.length-j-1],matrix[i][j]];
        }
    }

    return matrix;
    
};