/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let n = height.length, leftMaxHeightArr = Array(n),rightMaxHeightArr = Array(n), water = 0;

    leftMaxHeightArr[0] = 0;
    for(let i=1; i<n; i++){
        leftMaxHeightArr[i] = Math.max(leftMaxHeightArr[i-1],height[i-1]);
    }

    rightMaxHeightArr[n-1] = 0;
    for(let i=n-2; i>=0; i--){
        rightMaxHeightArr[i] = Math.max(rightMaxHeightArr[i+1],height[i+1]);
    }

    for(let i=1; i<n-1; i++){
        let minHeight = Math.min(leftMaxHeightArr[i],rightMaxHeightArr[i])
        if(minHeight>height[i])
            water += minHeight - height[i];
    }
    return water;
    
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));