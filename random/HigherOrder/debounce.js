function debounce(fn,delay){
    let timer
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}


const debouncedLog = debounce(console.log,300)
debouncedLog('hii')
debouncedLog('hello')