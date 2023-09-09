function kMostFreq(nums, k){

    nums.sort((a,b) => a-b);

    var helper = {};
    for(var i=0; i<nums.length; i++){
        helper[nums[i]] = (helper[nums[i]] || 0)  +1;
    }

    var uniqueEleArr = Object.keys(helper);

    uniqueEleArr.sort((a,b) => helper[b] - helper[a]);

    console.log(uniqueEleArr);
}

kMostFreq([1,2,3,5,1,3,2,1,1,4,5,5,5]);
