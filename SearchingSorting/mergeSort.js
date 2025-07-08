function merge(arr,st,mid,end){
    let temp = []
    let i=st,j=mid+1
    while(i<=mid&&j<=end){
        if(arr[i]<=arr[j]){
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[j])
            j++
        }
    }    
    while(i<=mid){
        temp.push(arr[i])
        i++
    }
    while(j<=end){
        temp.push(arr[j])
        j++
    }
    for(let i = 0; i<temp.length;i++){
        arr[i+st]=temp[i]
    }
}

function mergeSort(arr,left = 0, right = arr.length-1){
    if(left>=right) return
    let mid = Math.floor(left + (right-left)/2)
    mergeSort(arr,left,mid)
    mergeSort(arr,mid+1,right)
    merge(arr,left,mid,right)
}
const arr = [2,0,2,1,1,0]
mergeSort(arr)
console.log(arr)