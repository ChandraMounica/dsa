/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    let i=0,j,k=nums.length-1,result=[];

    nums.sort((a,b) => a-b);

    while(i<nums.length){

        while(i>0 && i<nums.length && nums[i] == nums[i-1] ) i++;
        if(i< nums.length){
            let key = -nums[i];
            j=i+1;
            while(j<k){
                let sum = nums[j]+nums[k];
                if(sum == key){
                    result.push([nums[i],nums[j++],nums[k--]]);
                    while(j<nums.length && nums[j] == nums[j-1])
                        j++;                     
                }     
                else if(sum > key){
                    k--;

                }else {
                    j++;
                }
            }
        }
        i++;
        k=nums.length-1;
    }

    return result;
    
};

threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]).forEach(ele => console.log(ele.toString()));