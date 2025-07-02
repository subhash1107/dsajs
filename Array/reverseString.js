// Problem Statement:
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(arr) {
  return arr.reverse();
}

// function reverseString(arr){
// let left = 0
// let right = arr.length-1
// while(left<right){
//     [arr[left],arr[right]]=[arr[right],arr[left]]
//     left++
//     right--
// }

// return arr
// }

function reverseString(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseString("Hanknah".split("")));
