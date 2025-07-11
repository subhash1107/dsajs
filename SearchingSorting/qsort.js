function quickSort(arr){
    function partition(start,end){
        let i = start, pivot = arr[end]
        for(let j = start; j<end; j++){
            if(arr[j]<=pivot){
                if(i!==j){
                    [arr[i],arr[j]]=[arr[j],arr[i]]
                }
                i++
            }
        }
        if(i!==end){
            [arr[i],arr[end]]=[arr[end],arr[i]]
        }
    return i    
    }
    function sort(left,right){
        if(left>=right)return
        let pivot = partition(left,right)
        sort(left,pivot-1)
        sort(pivot+1,right)
    }
    sort(0,arr.length-1)
    return arr
}

console.log(quickSort([5,9,4,3,7,8,2,1,6]))