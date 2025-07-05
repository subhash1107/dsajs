// 1394. Find Lucky Integer in an Array
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// Return the largest lucky integer in the array. If there is no lucky integer return -1.
// Example 1:
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency [2] 2.
// Example 2:
// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:
// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.


// function findLucky(arr){
//     let hash = {}
//     let max = -1
//     for(let i=0;i<arr.length;i++){
//         if(hash[arr[i]]===undefined){
//             hash[arr[i]]=0
//         }
//         hash[arr[i]]+=1
//     }
//     for(let i in hash){
//         if(i==hash[i]){
//             console.log(i,hash[i])
//             if(max<hash[i]){
//                 max=hash[i]
//             }
//         }
//     }
//     return max
// }


// we are assuming that elements in the array should be less than 500
function findLucky(arr){
    const count = new Array(501).fill(0)
    for(const num of arr){
        count[num]++
    }
    for(let i = 500; i>0; i--){
        if(count[i]===i){
            return count[i]
        }
    }

    return -1
}

console.log(findLucky([2,2,3,4]))
console.log(findLucky([1,2,2,3,3,3]))
console.log(findLucky([2,2,2,3,3]))