// # Single Number II

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:
// Input: nums = [0,1,0,1,0,1,99]
// Output: 99


// using bitwise operator 
// function singleNumber(nums){
// let ones = 0
// let twos = 0
// for(let num of nums){
//     ones = (ones^num) & ~twos
//     twos = (twos^num) & ~ones
// }
// return ones
// }


// using bit number shifting 
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let sum = 0;
        for (let num of nums) {
            if ((num >> i) & 1) {
                sum++;
            }
        }
        if (sum % 3 !== 0) {
            result |= (1 << i);
        }
    }
    if (result >= 2 ** 31) {
        result -= 2 ** 32;
    }

    return result;
};


console.log(singleNumber([0,1,0,1,0,1,99]))
console.log(singleNumber([2,1,2,1,2,1,99]))
console.log(singleNumber([2,4,2,4,2,4,99]))
console.log(singleNumber([2,2,3,2]))
console.log(singleNumber([2,2,8,2]))
console.log(singleNumber([4,4,3,4]))