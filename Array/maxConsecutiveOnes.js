// # Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let count = 0
    for(let i = 0; i<nums.length; i++){
        if(nums[i]==1){
            count++
        } else {
            count=0
        }
        if(count>max){
            max=count
        }
    }
    return max
};


console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))