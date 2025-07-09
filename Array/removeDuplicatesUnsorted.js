function removeDup(arr){
    return [...new Set(arr)]
}

function removeDup(arr){
    if(arr.length<=1) return arr
    let map = new Map()
    let x = 0
    for(let i = 0; i<arr.length; i++){
        if(!map.has(arr[i])){
            map.set(arr[i],true)
            arr[x]=arr[i]
            x++
        }
    }
    return arr.slice(0,x)
}

console.log(removeDup([1, 2, 2, 3, 4, 4]))

