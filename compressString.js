function compressString(str) {
  //write implementation here
  let string = ''
  let count = 1
  for (let i = 0; i < str.length-1; i++){
    if (str[i] === str[i + 1]) {
      count += 1
    } else {
      if (count > 9) {
        for (let j = 0; j < Math.floor(count / 9); j++){
          string+=str[i]+'9'
        }
        count%9>0?string += str[i] + count % 9:''
        count=1
      } else if (count === 1) {
        string += str[i]
        count=1
      } else {
        string += str[i] + count
        count=1
      }
    }

  }
  if(count>9){
    for (let j = 0; j < Math.floor(count / 9); j++){
          string+=str[str.length-1]+'9'
        }
        count%9>0?string += str[str.length-1] + count % 9:''
  } else if(count>1&&count<10) {
    string += str[str.length-1] + count
  }
  if (str[str.length-1] !== str[str.length-2]) {
    string+=str[str.length-1]
  }

  return string
}

console.log(compressString('aaabbbccccccccccccd'))
console.log(compressString('abccccddd'))