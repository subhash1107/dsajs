// function getResultByPath(path, obj) {
//   //write your implementation here
//   return path.split('.').reduce((acc,curr)=>acc?.[curr],obj)
// }
// function getResultByPath(path, obj) {
//   //write your implementation here
//   let current = obj
//   for(let key of path.split('.')){
//     current = current[key]
//   }
//   return current
// }
function getResultByPath(path, obj) {
  const normalizedPath = path.replace(/\[(\d+)]/g, '.$1')
  console.log(normalizedPath)
  const keys = normalizedPath.split('.')
  let result = obj
  for (let key of keys) {
    if (result === undefined || result === null) break
    result=result[key]
  }
  return result
}
const path = "data.results.status";
const obj = {
  data: {
    results:
    {
      status: "completed",
      error: "",
    }
  },
}



console.log(getResultByPath(path, obj))
