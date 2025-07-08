function InsertionSort(arr) {
    if(arr.length===1) return arr
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1; 
    while (prev >= 0 && curr < arr[prev]) {
      arr[prev + 1] = arr[prev];
      prev--
    }
    arr[prev+1]=curr
  }
  return arr
}


console.log(InsertionSort([2,0,2,1,1,0]))