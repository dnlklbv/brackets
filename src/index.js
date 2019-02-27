module.exports = function check(str, bracketsConfig) {
  const openingBrackets = [];
  const closingBrackets = [];
  const brackets = [];

  for (let i = 0; i < bracketsConfig.length; i += 1) {
    openingBrackets.push(bracketsConfig[i][0]);
    closingBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < openingBrackets.length; j += 1) {
      if (openingBrackets[j] === closingBrackets[j]) {
        // opening and closing bracket are the same
        if (str[i] === closingBrackets[j] && brackets[brackets.length - 1] === j) {
          // current char match closing bracket
          // and previous id the same as current id - > remove last one
          if (brackets.length === 0) return false; // closing before opening
          brackets.pop();
          break;
        }
        if (str[i] === openingBrackets[j]) {
          // current char match opening bracket - > add bracket id
          brackets.push(j);
          break;
        }
      }

      if (str[i] === openingBrackets[j]) {
        // current char match opening bracket - > add bracket id
        brackets.push(j);
        break;
      }
      if (str[i] === closingBrackets[j]) {
        // current char match closing bracket
        // and previous id the same as current id - > remove last one
        if (brackets.length === 0) return false; // closing before opening
        if (brackets[brackets.length - 1] !== j) break;
        brackets.pop();
        break;
      }
    }
  }

  if (brackets.length > 0) {
    return false;
  }
  return true;
};
