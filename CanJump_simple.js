/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    var max = nums[0];
    for(var i=1; i<nums.length; i++){
           if(i>max)
                return false;
            max = Math.max(max, i+nums[i]);
    }
    return true;

};