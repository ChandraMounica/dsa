/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let hashMap = {};

    for(let i=0; i<nums.length; i++){

        if(nums[i] in hashMap){
            return [hashMap[nums[i]],i];
        }
        hashMap[target-nums[i]] = i;
    }
    
};

console.log(twoSum([2,7,11,15],9));