// 1. Problem Statement:
// Given an array of integers, find the first position of a given integer target if it exists in the array, otherwise return -1.
// Linear Search is a simple search algorithm used to find a specific element in an array. It checks each element of the array one by one until the target value is found or the end of the array is reached.

// Example 1:

// Input: arr = [2, 4, 7, 10], target = 10
// Output: 3
// Example 2:

// Input: [6, 8, 0, 3], target = 5
// Output: -1


function linearSearch(arr,target){
    let i = 0;
    while(i<arr.length){
        if (arr[i]===target) return i
        i++
    }
}

console.log(linearSearch([2, 4, 7, 10],10))