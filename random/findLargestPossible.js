function formLargestNumber(arr) {
  const newArr = []
  for(let i = 0; i<arr.length; i++){
    if(arr[i]>=0&&arr[i]<=9){
        newArr.push(arr[i].toString())
    } else if(arr[i]>9){
        for(let j of arr[i].toString()){
            newArr.push(j)
        }
    }
  }

  
  
  return newArr.sort((a,b)=>b-a).join('')
}
const input = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input));