let n = 5
let i ;
let j ;

for(i=0;i<n;i++){
   let row = '';
   for(j=0;j<=i;j++){
    row += '*' +' '
   }
   console.log(row)
}

for(i=0;i<n;i++){
   let row = '';
   for(j=0;j<=i;j++){
    row += i+1 +' '
   }
   console.log(row)
}