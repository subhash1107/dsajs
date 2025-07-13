class Stack {
    constructor() {
        // Initialize your stack
        this.item=[]
    }
    
    push(element) {
        // Add element to the top
        this.item.push(element)
        return this.item.length
    }
    
    pop() {
        // Remove and return top element
       return this.item.pop()
    }
    
    peek() {
        // Return top element without removing
       return this.item[this.item.length-1]
    }
    
    isEmpty() {
        // Check if stack is empty
        return this.item.length===0
    }
    
    size() {
        // Return number of elements
        return this.item.length
    }
    
    clear() {
        // Remove all elements
        this.item=[]
    }
}

const nStack = new Stack()
console.log(nStack.push(5))
console.log(nStack.push(9))
console.log(nStack.push(6))
console.log(nStack.pop())
console.log(nStack.peek())
console.log(nStack.isEmpty())
console.log(nStack.size())
console.log(nStack.clear())
console.log(nStack.isEmpty())