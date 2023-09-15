/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows == 1)
        return s;

    let i=0,increment=true;
    let arr = Array(numRows).fill('');
    for(let k=0; k<s.length; k++) {
        arr[i]+=s[k];
        increment?i++:i--;
        if(i==numRows-1||i==0)
            increment = !increment;
    }

    return arr.join("");
    
};

console.log(convert("PAYPALISHIRING",3));