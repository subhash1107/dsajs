function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) return null;
  for (i of arr) {
    if (i > largest) {
      largest = i;
    } else if (i > secondLargest && i < largest) {
      secondLargest = i;
    }
  }

  return secondLargest;
}

console.log(secondLargest([5, , 5, 8, 8, 7, 5, 5]));


// second smallest
function secondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  if (arr.length < 2) return null;
  for (i of arr) {
    if (i < smallest) {
      smallest = i;
    } else if (i < secondSmallest && i > smallest) {
      secondSmallest = i;
    }
  }

  return secondSmallest;
}

console.log(secondSmallest([5,2 , 5, 8, 8, 7, 5, 5]));
