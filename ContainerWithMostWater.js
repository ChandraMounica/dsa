/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let i=0,j=height.length-1,maxArea=0;

    while(i<j){
        let ht = Math.min(height[i],height[j]);
        maxArea = Math.max(ht*(j-i),maxArea);
        if(ht == height[i])
            i++;
        if(ht == height[j])
            j--;
    }
    return maxArea;
    
};