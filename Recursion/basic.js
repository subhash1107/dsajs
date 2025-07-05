// If the value of n is too large then it can lead to stack overflow in this case consider using of iteration.



function sumofNnumbers(n){
   if (n === 0) return 0
   return n+sumofNnumbers(n-1) 
}

console.log(sumofNnumbers(5))