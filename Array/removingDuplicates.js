// sorted array in asc order

// function removeDup(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0 || arr[i - 1] != arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }


// function removeDup(arr) {
//   let x = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>arr[x]) {
//         x+=1
//         arr[x]=arr[i]
//     }
//   }

//   return [x+1,arr.slice(0,x+1)]
// }



// function removeDup(arr) {
//   return arr.filter((item,index)=> index===0 || item!=arr[index+1])
// }


function removeDup(arr){
    return arr.reduce((acc,curr)=>{
        if(acc.length===0 || acc[acc.length-1] !== curr){
            acc.push(curr)
        }
        return acc
    },[])
}



console.log(removeDup([1, 2, 5, 5, 6, 8, 8, 8, 8, 9]));
console.log(removeDup([1]));
