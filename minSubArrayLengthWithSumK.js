/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let leftWindow=0,rightWindow=0,currentSum=0,minLen=Number.MAX_SAFE_INTEGER;

    while(rightWindow<nums.length){
        currentSum+=nums[rightWindow];

        while(currentSum >= target){
            minLen = Math.min(minLen,rightWindow-leftWindow+1);

            currentSum -= nums[leftWindow];
            leftWindow++;

        }

        rightWindow++;
    }

    return minLen==Number.MAX_SAFE_INTEGER?0:minLen;
    
};

console.log(minSubArrayLen(7,[2,3,1,2,4,3]));