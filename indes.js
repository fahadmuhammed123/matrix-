// matrix.js

function generateMatrix(rows, cols) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < cols; j++) {
      // You can fill the matrix elements with any desired values.
      // Here, I'm using a simple formula for illustration purposes.
      row.push(i * cols + j + 1);
    }

    matrix.push(row);
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join('\t'));
  }
}

const rows = 4; // Change the number of rows as needed
const cols = 4; // Change the number of columns as needed

const myMatrix = generateMatrix(rows, cols);
console.log(`Generated ${rows}x${cols} matrix:`);
printMatrix(myMatrix);
