// function flatten(arr) {
//   return arr.reduce((acc, val) => {
//     return acc.concat(Array.isArray(val) ? flatten(val) : val);
//   }, []);
// }

// function flatten(arr){
//     return arr.flat(Infinity)
// }

function flatten(arr) {
  let result = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el));
    } else {
      result.push(el);
    }
  }
  return result;
}
console.log(flatten([1, [2, [3, 4], 5], 6]))