// Problem Statement:
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2^x.
// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

// function powerOfTwo(n){
//     while(n>2){
//         n/=2
//     }
//     if(n==2){
//         return true
//     }
//     return false
// }
// function powerOfTwo(n){
//     if(n<1) return false
//     while(n>1){
//         if(n%2!==0) return false
//         n/=2
//     }
//     return true
// }

// ******************************

// A power of two in binary has exactly one set bit.
// Example:
// 8 = 1000
// 8 - 1 = 0111
// 8 & 7 = 0
// function powerOfTwo(n){
//     return n>0&&(n&(n-1))===0
// }

// *********************************

// recursion

function powerOfTwo(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n % 2 === 0) {
    let x=n/2
    return powerOfTwo(x);
  }
  return false
}

console.log(powerOfTwo(3));
console.log(powerOfTwo(1));
console.log(powerOfTwo(0));
console.log(powerOfTwo(64));
console.log(powerOfTwo(65));
console.log(powerOfTwo(100));
console.log(powerOfTwo(8));
