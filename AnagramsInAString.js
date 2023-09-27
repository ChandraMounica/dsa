/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s2, s1) {

    let result = [];
    
    let s1Map = new Map();
    for(let i=0; i<s1.length; i++) {
        s1Map.set(s1[i] , (s1Map.get(s1[i]) || 0 ) + 1);
    } 

    //no:of unique characters to collect
    let distinctChars = s1Map.size, start=0;

    for(let end=0; end<s2.length; end++) {
        if(s1Map.has(s2[end]))
            s1Map.set(s2[end], s1Map.get(s2[end]) - 1);

        if(s1Map.get(s2[end]) == 0)
            distinctChars--;
        
        while(distinctChars == 0){
            if(end - start + 1 == s1.length)
                result.push(start);
            
            if(s1Map.has(s2[start]))
                s1Map.set(s2[start], s1Map.get(s2[start]) + 1);

            if(s1Map.get(s2[start]) == 1)
                distinctChars++;

            start++;
        }
    }

    return result;
};

console.log(findAnagrams("cbaebabacd","abc"));