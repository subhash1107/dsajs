function mergeSort(arr){
function sort(left, right){
    if(left>=right) return
    let mid = Math.floor(right+(left-right)/2)
    sort(left,mid)
    sort(mid+1,right)
    merge(left,mid,right)
}
function merge(start,mid,end){
    let temp = []
    let i = start
    let j = mid+1
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
        arr[i+start]=temp[i]
    }
}
sort(0,arr.length-1)
return arr
}

console.log(mergeSort([8,6,4,7,2,9,1,3,5]))