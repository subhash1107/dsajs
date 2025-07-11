function multiSum(...args){
    return args.reduce((acc,curr)=>acc+curr,0)
}

console.log(multiSum(2,5))
console.log(multiSum(2,5,5))
console.log(multiSum(2,5,9,6))
console.log(multiSum())