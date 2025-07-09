// function customSort(arr) {
//   //write your implementation here
//   let map = new Map()
//   for (let i = 0; i < arr.length; i++){
//     if (!map.has(typeof arr[i])) {
//       map.set(typeof arr[i],[])
//     }
//     map.get(typeof arr[i]).push(arr[i])
//   }
//   let stringArr = map.get('string')
//   for(let i = 0; i<stringArr.length;i++){
//     for(let j = 0; j<stringArr.length-i;j++){
//         if(stringArr[j]>stringArr[j+1]){
//             [stringArr[j],stringArr[j+1]]=[stringArr[j+1],stringArr[j]]
//         }
//     }
//   }
//   let numArr = map.get('number')
//   for(let i = 0; i<numArr.length;i++){
//     for(let j = 0; j<numArr.length-i;j++){
//         if(numArr[j]>numArr[j+1]){
//             [numArr[j],numArr[j+1]]=[numArr[j+1],numArr[j]]
//         }
//     }
//   }
//   return [...stringArr,...numArr]
// }
function customSort(arr) {
  //write your implementation here
  const chars = []
  const nums = []
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i]==='string') {
      chars.push(arr[i])
    } else if(typeof arr[i]==='number')
    nums.push(arr[i])
  }

  for(let i = 0; i<chars.length;i++){
    for(let j = 0; j<chars.length-1-i;j++){
        if(chars[j]>chars[j+1]){
            [chars[j],chars[j+1]]=[chars[j+1],chars[j]]
        }
    }
  }
  for(let i = 0; i<nums.length;i++){
    for(let j = 0; j<nums.length-1-i;j++){
        if(nums[j]>nums[j+1]){
            [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
        }
    }
  }
  return [...chars,...nums]
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a","A"];
console.log(customSort(input))