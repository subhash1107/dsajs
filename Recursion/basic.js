function sumofNnumbers(n){
   if (n === 0) return 0
   return n+sumofNnumbers(n-1) 
}

console.log(sumofNnumbers(5))