/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let prevIndex = -1;
    for(i=0;i<s.length;i++){
        let index = t.indexOf(s[i],prevIndex+1);
        if(index == -1)
            return false;
        prevIndex = index;
    }
    return true;   
};

console.log(isSubsequence("aaaaaa","bbaaaa"));