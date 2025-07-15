function formLargestNumber(arr) {  
  const newArr = arr.map(item=>item.toString()).sort((a,b)=>(b+a).localeCompare(a+b))
  if(newArr[0]==='0') return '0'
  return newArr.join('')

}
const input = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input));