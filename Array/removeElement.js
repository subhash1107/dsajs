// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// ***Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// ***Return k.

// it is not in-place
// function removeElement(arr,val){
// const num = arr.filter(item => item!==val) 
// return [num.length,num]
// }

function removeElement(arr,val){
    let k = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]!==val){
            arr[k]=arr[i]
            k++
        }
    } return [k,arr.slice(0,k)]
}


console.log(removeElement([2,54,1,52,5,5,7,42,1,46,0,32,5,1],5))
console.log(removeElement([2,54],5))
console.log(removeElement([2],5))
console.log(removeElement([],5))
