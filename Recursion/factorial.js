// Problem Statement:
// Write a recursive function factorial(n) that returns the factorial of a given positive integer n.
// The factorial of a number n is defined as:

// n! = n × (n - 1) × (n - 2) × ... × 2 × 1
// CopyErrorCopied
// By definition:

// 1! = 1
// 3! = 3 × 2 × 1 = 6
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// CopyErrorCopied
// Example 1:

// Input: n = 5
// Output: 120
// Explanation: 5! = 5 × 4 × 3 × 2 × 1 = 120
// Example 2:

// Input: n = 10
// Output: 3628800
// Explanation: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800


function factorial(n){
    if(n===1) return 1

    return n*factorial(n-1)
}


console.log(factorial(10))
console.log(factorial(5))