for (let i = 7; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += " " + j;
  }
  console.log(row);
}
for (let i = 0; i < 7; i++) {
  let row = "";
  for (let j = 0; j < i+1; j++) {
    row += " " + j;
  }
  console.log(row);
}
for (let i = 0; i < 7; i++) {
  let row = "";
  for (let j = 0; j < 7; j++) {
    if(j<i+1){
        row +=' '+' '
    }else{
    row += ' '+j;
    }
  }
  console.log(row);
}
