const transpose = require('./matrix_transposition');

const wordSearch = (letters, word) => { 
  const wordRev = word.split('').reverse().join('');

  if (!word) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word) || l.includes(wordRev)) {
        return true;
      }
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''))
  for (l of verticalJoin) {
    if (l.includes(word) || l.includes(wordRev)) {
      return true;
    }
    
  }

  return(false);
}

module.exports = wordSearch