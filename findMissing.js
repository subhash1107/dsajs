// function findMissingNumber(nums) {
//     // Your implementation
//     const sorted = nums.sort((a, b) => a - b)
//     if(sorted[0]!==0) return 0
//     for (let i = 1; i < sorted.length; i++){
//         if(sorted[i]-1!==sorted[i-1]) return sorted[i]-1
//     }
//     return sorted.length
// }
function findMissingNumber(nums) {
    // Your implementation
    const expectedSum = nums.length*(nums.length+1)/2
    let actualSum = 0
    nums.forEach(element => {
        actualSum+=element
    });

    return expectedSum-actualSum
}

console.log(findMissingNumber([0,1]))