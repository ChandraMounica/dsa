/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows == 1)
        return s;

    let k=0,i=0;j=0,result="";
    let arr = Array(numRows).fill().map(() => Array());
    while(k<s.length){
        while(k<s.length && i<=numRows-1) {
            arr[i++].push(s[k++]);
        }
        i = numRows-2;
        while(k<s.length && i>=0){
            arr[i--].push(s[k++]);
        }
        i = 1;
    }

    i=0;
    while(i<numRows){
        result+=arr[i++].join("");
    }

    return result;
    
};

console.log(convert("AB",1));