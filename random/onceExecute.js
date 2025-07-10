function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}


function add (num1,num2){
    return num1+num2
}

const onceAdd = once(add)

console.log(onceAdd(9,2))
console.log(onceAdd(5,7))