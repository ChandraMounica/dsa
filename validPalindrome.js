/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    //s = s.toLowerCase().replace(/[^a-z0-9]/gi,"");

    let i=0,j=s.length-1;

    while(i<j){
        if(!isAlphaNumeric(s[i]))
            i++;   
        else if(!isAlphaNumeric(s[j]))
            j--;         
        else {
            if(s[i].toLowerCase() != s[j].toLowerCase())
                return false;
            i++;
            j--;
        }
    }
    
    return true;
    
};

function isAlphaNumeric(char){

    return (char>='A'&&char<='Z') || (char>='0'&&char<='9') || (char>='a'&&char<='z');

}