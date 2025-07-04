// Problem Statement:
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
//
// Example 1:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
//
// Example 2:
// Input: [0]
// Output: [0]
//

// var moveZeroes = function (nums) {
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[x] = nums[i];
//       x++;
//     }
//   }
//   while (x < nums.length) {
//     nums[x] = 0;
//     x++;
//   }
//   return nums;
// };

var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (x !== i) {
        [nums[x], nums[i]] = [nums[i], nums[x]];
      }
      x++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
