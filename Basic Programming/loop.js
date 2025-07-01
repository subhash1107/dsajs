// searching for an element in Array

function searchEl (arr,el){
   for(let i =0;i<arr.length;i++){
    if(arr[i]===el){
        return 1
    }
   }

   return -1
}

console.log(searchEl([2,6,7,'fg'],'fg'))
console.log(searchEl([2,6,7,'fg'],'f'))