/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    let sArr = s.split(" ");

    if(sArr.length != pattern.length)
        return false;

    if(new Set(sArr).size != new Set([...pattern]).size)
        return false;

    let mapper = new Map();

    for(let i=0; i<sArr.length;i++){
        if(mapper.has(sArr[i]) && mapper.get(sArr[i]) != pattern[i])
            return false;
        mapper.set(sArr[i],pattern[i]);
    }
    return true;
};

console.log(wordPattern("abba","dog cat cat fish"));