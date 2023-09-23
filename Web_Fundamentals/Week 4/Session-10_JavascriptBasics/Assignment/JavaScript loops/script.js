function drawTriangle(triangleSize) {
  // Your solution goes here
  for (let i = 0; i < triangleSize + 1; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
