function getResultByPath(path, obj) {
  //write your implementation here
  return path.split('.').reduce((acc,curr)=>acc?.[curr],obj)
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
