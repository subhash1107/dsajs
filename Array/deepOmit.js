// function deepOmit(obj,keyToOmit){
//     if(Array.isArray(obj)){
//         return obj.map(item=>deepOmit(item,keyToOmit))
//     }
//     if(typeof obj === 'object' && obj !== null){
//         return Object.keys(obj).reduce((acc,key)=>{
//             if(key !== keyToOmit){
//                 acc[key] = deepOmit(obj[key],keyToOmit)
//             }
//         })
//     }
// }

function deepOmit(obj,keyToOmit){
    if(Array.isArray(obj)){
        return obj.map(item=>deepOmit(item,keyToOmit))
    }
    if(typeof obj === 'object' && obj !== null){
        const newObj = {}
        for(const key in obj){
            if(key !== keyToOmit){
                newObj[key] = deepOmit(obj[key],keyToOmit)
            }
        }
        return newObj
    }
    return obj
}



