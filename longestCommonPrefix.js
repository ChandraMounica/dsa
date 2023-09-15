/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    if(strs.length == 1)
        return strs[0];
    let str1=strs[0],str2=strs[strs.length-1],i=0;
    while(i<str1.length && str1[i] == str2[i]){
        i++;
    }
    return str1.substring(0,i);

};