function quickSort(arr) {
  function partition(start, end) {
    let i = start,pivot=arr[end]
    for(let j = start;j<end;j++){
        if(arr[j]<=pivot){
            [arr[j],arr[i]]=[arr[i],arr[j]]
            i++
        }
    }
   
    [arr[end],arr[i]]=[arr[i],arr[end]]
    return i;
  }
  function sort(left, right) {
    if (left >= right) return;
    let pivot = partition(left, right);
    sort(left, pivot - 1);
    sort(pivot + 1, right);
  }
  sort(0, arr.length-1);
  return arr;
}

console.log(quickSort([4, 5, 2, 7, 9, 3, 1, 6, 8]));
