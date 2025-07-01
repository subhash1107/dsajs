// function reversedInt(n) {
//   let reversed = 0;
//   if (n > 0) {
//     while (n > 0) {
//       reversed = reversed * 10 + (n % 10);
//       n = Math.floor(n / 10);
//     }
//   } else {
//     while (n < 0) {
//       reversed = reversed * 10 - (n % 10);
//       n = Math.ceil(n / 10);
//     }
//     reversed = -reversed
//   }
//   return reversed;
// }

// alternate better approach

function reversedInt(n) {
  let num = Math.abs(n);
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if(reversed>(2**31)-1) return 0
  return n>0 ? reversed:-reversed;
}

console.log(reversedInt(-55426));
console.log(reversedInt(55426));
console.log(reversedInt(554266867454678));
console.log(reversedInt((8463847412)))
