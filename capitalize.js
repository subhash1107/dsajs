const capitalise = (sentence)=>{
    return sentence.trim().split(/\s+/).map(item=>(item[0].toUpperCase()+item.slice(1).toLowerCase())).join(' ')
}

console.log(capitalise('  hi I am   subhAsh'))