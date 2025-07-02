function isPrime(num) {
  num = Math.abs(num);
  if (num === 0 || num === 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i <= num ** 0.5; i++) {
    // console.log(i)
    if (num % i === 0) return false;
}
return true;
}


// this code is basically checking all the 2 and 3 divisiors first so skipping each iteration and take minimal time 
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false; 

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}


console.log("Prime: ", isPrime(0));
console.log("Prime: ", isPrime(2));
console.log("Prime: ", isPrime(3));
console.log("Prime: ", isPrime(1));
console.log("Prime: ", isPrime(-1));
console.log("Prime: ", isPrime(-25));
console.log("Prime: ", isPrime(-22));
console.log("Prime: ", isPrime(-7));
console.log("Prime: ", isPrime(17));
