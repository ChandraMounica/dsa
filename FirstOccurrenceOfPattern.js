/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    for(let start=0; start<=haystack.length-needle.length; start++){
        let i=start;
        for(let j=0; j<needle.length; j++){
            if(haystack[i] != needle[j])
                break;
            i++;
        }
        if(i-start==needle.length){
            return start;
        }
    }
    return -1;
    
};