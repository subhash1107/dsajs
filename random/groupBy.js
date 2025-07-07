// function groupBy(arr, key) {
//     let result = {}
//     arr.forEach((data) => {
//         if(!result[data[key]]){
//             result[data[key]]=[]
//         }
//         result[data[key]].push(data)
//     })
//     return result
// }

function groupBy(arr,key){
    return arr.reduce((acc,curr)=>{
        const groupKey = curr[key]
        if(!acc[groupKey]){
            acc[groupKey]=[]
        }
        acc[groupKey].push(curr)
        return acc
    },{})
}
console.log(groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age'))