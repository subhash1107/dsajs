function makeCounter(initialValue = -2) {
    // Your implementation
    let counter = initialValue
    return {
        increment:function(){
            return ++counter
        },
        decrement: function () {
            return --counter
        },
        reset: function () {
            counter=initialValue
            return counter
        }
    }
}
const c = makeCounter()

console.log(c.increment())
console.log(c.increment())
console.log(c.increment())
console.log(c.decrement())
console.log(c.reset())