// # Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums


// 1. THIS SOLUTION IS OK BUT TAKING O(n2) time 


// var missingNumber = function(nums) {
//     for(let i = 0; i<=nums.length;i++){
//         if(!nums.includes(i)){
//             return i
//         }
//     }
// };

// using reduce

// function missingNumber(nums){
//     let n = nums.length
//     let expectedSum = n*(n+1)/2
//     let actualSum = nums.reduce((acc,current)=>acc+=current)
//     return expectedSum - actualSum
// }


// leetcode style most preferred

// function missingNumber(nums){
//    const n = nums.length
//    let expectedSum = n*(n+1)/2
//    let actualSum = 0
//    for(let i = 0; i<n ; i++){
//         actualSum+=nums[i]
//    }
//    return expectedSum-actualSum
// }


// using xor operator

// The key factor is that when we xor any number with same number then it returns 0 and when we xor any number with 0 then it returns the same number.
// So what we can do is like we were doing in all above approach we are just adding up the espected numbers and then subtracting the actual addition then finding missing single number.
// Here we can do like we have to xor in the expected number and then just xor out with the numbers we have then we will get the expected output.


function missingNumber(nums){
    let xor = 0
    for(let i = 0; i<= nums.length; i++){
        xor ^= i
    }
    for(let num of nums){
        xor ^= num
    }
    return xor
}

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))