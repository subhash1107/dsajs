var sortColors = function(nums) {
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                [nums[i],nums[j]]=[nums[j],nums[i]]
            }
        }
    }
    return nums
};

console.log(sortColors([2,0,2,1,1,0]))