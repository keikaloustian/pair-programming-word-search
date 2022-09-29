const transpose = function (matrix) {
  let output = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    let temporary = [];
    for (let j = 0; j < matrix.length; j++) {
      temporary.push(matrix[j][i]);
    }
    output.push(temporary);
  }
  
  return output;
};

module.exports = transpose;