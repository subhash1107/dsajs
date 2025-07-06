

// overcomplicated

// function chunkArray(arr, n) {
//   // Your implementation
//   let newArr = [];
//   let remaining = arr.length;
//   let i = 0;
//   let limit = n;

//   while (remaining > 0) {
//     if (n > remaining) {
//       limit = limit - n + remaining;
//     }
//     let tempArr = [];
//     while (i < limit) {
//       tempArr.push(arr[i]);
//       i++;
//     }
//     limit += n;
//     remaining -= n;
//     newArr.push(tempArr);
//   }
//   return newArr;
// }




// using slice methods


// function chunkArray(arr, n) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += n) {
//     newArr.push(arr.slice(i, i + n));
//   }

//   return newArr;
// }


function chunkArray(arr, n) {
  let newArr = [];
  let currentChunk = [];
  for (let i = 0; i < arr.length; i++) {
    currentChunk.push(arr[i]);
    if (currentChunk.length === n) {
      newArr.push(currentChunk);
      currentChunk = [];
    }
  }
  if (currentChunk.length > 0) {
    newArr.push(currentChunk);
  }

  return newArr;
}



//For the purpose of user debugging.
//pass your array and chunk size in function call
console.log(chunkArray([1, 2, 3], 5))
console.log(chunkArray([1, 2, 3], 2));
