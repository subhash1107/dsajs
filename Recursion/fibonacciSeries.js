// Problem Statement:0,1,1,2,3,5,8,13,21...
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1

// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).
// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// using recursion
// 1.
// function fibonacci(n){
//     if(n<=0) return 0;
//     if(n===1) return 1;
//     return fibonacci(n-1) + fibonacci(n-2)
// }

// 2.

// function fibonacci(n,memo = {}){
//     if(n<=0) return 0;
//     if(n===1) return 1;
//     if(memo[n]) return memo[n]
//     memo[n]=fibonacci(n-1,memo)+fibonacci(n-2,memo)
//     return memo[n]
// }

// 3. bottom up iteration
// function fibonacci(n){
//     if(n<=0) return 0;
//     if(n===1) return 1;
//     let a = 0, b=1;
//     for(let i = 2; i<=n;i++){
//         let temp = a+b
//         a=b
//         b=temp
//     }
//     return b
// }

// using binets formula
function fibonacci(n){ const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;
  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(9))