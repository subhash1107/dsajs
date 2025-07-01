let n = 5;
let i;
let j;

for (i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < 2 * n - 1; j++) {
    if (j < n) {
      if (j < n - i - 1) {
        row += " " + " ";
      } else {
        row += "*" + " ";
      }
    } else {
      if (j > n + i-1) {
        row += " " + " ";
      } else {
        row += "*" + " ";
      }
    }
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < 2 * n - 1; j++) {
    if (j < n) {
      row += j < n - i - 1 ? "  " : "* ";
    } else {
      row += j > n + i - 1 ? "  " : "* ";
    }
  }
  console.log(row);
}


for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < 2 * n - 1; j++) {
    if (j >= n - i - 1 && j <= n + i - 1) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let spaces = "  ".repeat(n - i - 1);
  let stars = "* ".repeat(2 * i + 1);
  console.log(spaces + stars + spaces);
}
