// function isPallindrome(n){
//     let num = ''+n
//     let newNum = ''
//     for(let i = num.length-1; i>=0; i--){
//         newNum+=num[i]
//     }

//     num===newNum?console.log(true):console.log(false)
// }

// for number only

// function isPallindrome(n){
// if(n<0) return false
// let original = n
// let reversed = 0
// while(n>0){
//     reversed = reversed*10+n%10
//     n=Math.floor(n/10)
// }
// return original===reversed
// }

// array methods

// function isPallindrome(n){
// if(n<0) return false
// let original = ''+n
// let reversed = original.split().reverse().join('')

// return original===reversed

// }

// by two pointer

function isPallindrome(n) {
  if (n < 0) return false;
  let original = "" + n;
  let left = 0;
  let right = original.length-1;

  while (left < right) {
    if (original[left] != original[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true
}

console.log(isPallindrome(4554));
console.log(isPallindrome(45545));
console.log(isPallindrome(-45545));
console.log(isPallindrome(5));
console.log(isPallindrome(0));
