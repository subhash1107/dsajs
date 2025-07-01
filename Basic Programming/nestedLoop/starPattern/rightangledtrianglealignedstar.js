let n = 5;
let i;
let j;

// for stars

for (i = n; i >= 0; i--) {
  let row = "";
  for (j = 0; j < n; j++) {
    if (j >= i) {
      row += "*" + " ";
    } else {
      row += " " + " ";
    }
  }
  console.log(row);
}

// for binary

for (i = n; i >= 0; i--) {
  let row = "";
  for (j = 0; j < n; j++) {
    let bin;
    if (j % 2 != 0) {
      bin = 1;
    } else {
      bin = 0;
    }
    if (j >= i) {
      row += bin + " ";
    } else {
      row += " " + " ";
    }
  }
  console.log(row);
}

for (i = n; i >= 0; i--) {
  let row = "";
  let bin = 0;
  for (j = 0; j < n; j++) {
    if (bin === 1) bin = 0;
    else bin = 1;
    if (j >= i) {
      row += bin + " ";
    } else {
      row += " " + " ";
    }
  }
  console.log(row);
}

// continous toggle of binary

let toggle = 0;
for (i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row += toggle + " ";
    if (toggle === 1) toggle = 0;
    else toggle = 1;
  }
  console.log(row);
}
