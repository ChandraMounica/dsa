/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    let mappings = {};
    let mappedChars = new Set();

    for(let i=0; i<s.length; i++){
        if(Object.hasOwn(mappings, s[i])) {
            let mapping = mappings[s[i]];
            if(t[i] != mapping)
                return false;
        }else{
            if(mappedChars.has(t[i])) //t[i] already mapped to some char in s 
                return false;
            mappings[s[i]] = t[i];
            mappedChars.add(t[i]);
        }
    }

    return true;
    
};

console.log(isIsomorphic("adds","egge"));