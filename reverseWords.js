/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let a = s.split("");
    // step 1. reverse the whole string
    reverse(a, 0, a.length - 1);
    // step 2. reverse each word
    reverseEachWord(a, a.length);
    // step 3. clean up spaces
   return cleanSpaces(a, a.length);
  }
  
  function reverseEachWord(a, n) {
    let i = 0, j = 0;
      
    while (i < n) {
      while (i < n && a[i] == ' ') i++; // skip spaces
      while (j < n && a[j] != ' ') j++; // skip non spaces
      reverse(a, i, j - 1);                      // reverse the word
      i = j+1;
      j= j+1;
    }
  }
  
  // trim leading, trailing and multiple spaces
  function cleanSpaces(a, n) {
    let i = 0, j = 0;
      
    while (j < n) {
      while (j < n && a[j] == ' ') j++;             // skip spaces
      while (j < n && a[j] != ' ') a[i++] = a[j++]; // keep non spaces
      while (j < n && a[j] == ' ') j++;             // skip spaces
      if (j < n) a[i++] = ' ';                      // keep only one space
    }
  
    return a.slice(0,i).join("");
  }
  
  // reverse a[] from a[i] to a[j]
  function reverse(a, i, j) {
    while (i < j) {
      let t = a[i];
      a[i++] = a[j];
      a[j--] = t;
    }
  }

  console.log(reverseWords("a good   example"))