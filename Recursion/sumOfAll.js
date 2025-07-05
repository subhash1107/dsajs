// Write a recursive function sum(arr, n) that calculates the sum of the first n elements of an array arr.
// Example 1:

// Input: arr = [1, 2, 3], n = 3
// Output: 6
// Example 2:

// Input: arr = [1, 3, 4, 23, 5, 2], n = 6
// Output: 38

function sumOfAllEl(arr,n){
    if(n===1)return arr[0]
    return arr[n-1]+sumOfAllEl(arr,n-1)
}

console.log(sumOfAllEl([1, 3, 4, 23, 5, 2],6))