let n = 5
let i ;
let j ;

for(i=n;i>=0;i--){
   let row = '';
   for(j=0;j<i;j++){
    row += '*' +' '
   }
   console.log(row)
}