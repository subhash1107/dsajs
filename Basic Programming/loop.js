// searching for an element in Array

function searchEl(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return 1;
    }
  }

  return -1;
}

console.log(searchEl([2, 6, 7, "fg"], "fg"));
console.log(searchEl([2, 6, 7, "fg"], "f"));

// count negative number in Array

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count
}

console.log(countNegative([2,8,2,8,-5,-6,4,-5,-3]))

// find the largest number in the Array

function findLargest (arr){
    let largest = -Infinity
    for(let i=0;i<arr.length;i++){
      if(arr[i]>largest){
        largest = arr[i]
      }
    }

    return largest
}


console.log('largest ',findLargest([2,5,4,2,65,5,6,]))

// smallest Number

function findSmallest(arr){
    let sm = Infinity;
    for(i in arr){
        if(arr[i]<sm){
            sm = arr[i]
        }
    }

    return sm
}
console.log(findSmallest([5,6,5,85,8,2,3,55,9]))