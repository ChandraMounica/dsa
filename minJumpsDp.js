/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    let dp=Array(nums.length).fill(-1);
    return getMinJumps(nums,0,dp);
    
};

function getMinJumps(nums,index,dp) {

    if(dp[index]!=-1)
        return dp[index];

    if(index==nums.length-1)
        return 0;

    let minJumps = Number.MAX_SAFE_INTEGER;
    for(let j=index+1; j<=index+nums[index] && j<nums.length; j++){
        minJumps = Math.min(minJumps,getMinJumps(nums,j,dp));
    }
    
    if(minJumps != Number.MAX_SAFE_INTEGER)
        return dp[index]=1+minJumps;
    else
        return dp[index]= Number.MAX_SAFE_INTEGER;

}