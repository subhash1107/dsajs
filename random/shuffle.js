// function shuffle(array) {
//   const newArr = [];
//   const used = new Set();

//   while (newArr.length < array.length) {
//     const j = Math.floor(Math.random() * array.length);
//     if (!used.has(j)) {
//       used.add(j);
//       newArr.push(array[j]);
//     }
//   }
//   return newArr;
// }

// function shuffle(array) {
//     // Your implementation
//     const newArr = []
//     const map = new Map()
//     let j = 1;
//     for (let i = 0; i < array.length; i++){
//     let random = Math.random()
//         j=Math.floor(random*array.length)
//         if (!map.has(j)) {
//             map.set(j, true)
//             newArr.push(array[j])
//         } else {
//             j = 0
//             while (map.has(j)) {
//                 j++
//             }
//             map.set(j, true)
//             newArr.push(array[j])
//         }
//     }
//     return newArr

// }

// fisher yates approach

function shuffle(array) {
  const result = array.slice(); // create a shallow copy
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}




console.log(shuffle([1,5,7,6,9,3]))