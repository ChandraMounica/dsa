/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {

   let result = [];

   let m = matrix.length;
   let n = matrix[0].length;

   let startRow = 0, startCol = 0, endRow = m-1, endCol = n-1;
   
   while((startRow <= endRow) || (startCol <= endCol)) {

       let j = startCol;
       while(j<=endCol) {
           result.push(matrix[startRow][j]);
           j++;
       }
       startRow++;

       j = startRow;
       while(j<=endRow) {
           result.push(matrix[j][endCol]);
           j++;
       }
       endCol--;

       if(startRow <= endRow) {
          j = endCol;
          while(j>=startCol) {
            result.push(matrix[endRow][j]);
            j--;
          }
        endRow--;
       }
    
       if(startCol <= endCol) {
          j=endRow;
          while(j>=startRow) {
            result.push(matrix[j][startCol]);
            j--;
          }
        startCol++;
       }
   }

   return result;

};

spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);