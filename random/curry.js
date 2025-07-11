function curry(fn) {
    // Your implementation
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return function (...nextArgs) {
                return curried(...args.concat(...nextArgs))
            }
        }
    }
}

function sum(a,b,c){
    return a+b+c
}
const currySum = curry(sum)
console.log(currySum(5)(2)(1))
console.log(currySum(5)(2,1))
console.log(currySum(5,2)(1))