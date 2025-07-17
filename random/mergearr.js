// You are given two arrays of objects. Each object contains an id field and other key-value data. The goal is to merge the data by id.
// If an id exists in both arrays, merge the properties.
// If it exists only in one, include it as is.
// In case of conflict (same key but different values), prefer values from the second array.
// Input:
// Two arrays of objects (each object has at least an id key)
// Output:
// A new array with merged objects based on id
function mergeData(arr1, arr2) {
    let map = new Map()
    for (let item of arr1) {
        map.set(item.id,{...item})
    }
    for (let item of arr2) {
        if (map.has(item.id)){
            map.set(item.id,{...map.get(item.id),...item})
        } else {
            map.set(item.id,{...item})
        }
    }
    return Array.from(map.values())
}

let arr1 = [{id:1,name:'alice'},{id:2,name:'bob'}]
let arr2 = [{id:2,age:30},{id:3,name:'Charlie'}]
console.log(mergeData(arr1,arr2))