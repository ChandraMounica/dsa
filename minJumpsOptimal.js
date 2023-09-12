/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    if(nums.length <= 1)
        return 0;
    
    if(nums[0] == 0)
        return -1;

    let steps=nums[0], maxReach=nums[0], jumpCount=1;

    for(let i=1; i<nums.length; i++){
        if(i==nums.length-1)
            return jumpCount;
        maxReach = Math.max(maxReach,i+nums[i]);
        steps--;
        if(steps == 0){
            jumpCount++;
            if(i>= maxReach)
                return -1;
            steps = maxReach-i;
        }
    }
    
};

