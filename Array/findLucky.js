function findLucky(arr){
    let hash = {}
    let max = -1
    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]]===undefined){
            hash[arr[i]]=0
        }
        hash[arr[i]]+=1
    }
    for(let i in hash){
        if(i==hash[i]){
            console.log(i,hash[i])
            if(max<hash[i]){
                max=hash[i]
            }
        }
    }
    return max
}

console.log(findLucky([2,2,3,4]))
console.log(findLucky([1,2,2,3,3,3]))
console.log(findLucky([2,2,2,3,3]))