/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let n = height.length, water = 0;
    
    if(n<=2)
        return water;   

    let leftMax = height[0], rightMax = height[n-1],left = 1, right = n-2;
    while(left<=right){
        if(leftMax<rightMax){
            if(height[left]>leftMax) leftMax=height[left];
            else water+= leftMax-height[left];
            left++;
        }else{
            if(height[right]>rightMax) rightMax=height[right];
            else water+= rightMax-height[right];
            right--;
        }
    }
    
    return water;
    
};