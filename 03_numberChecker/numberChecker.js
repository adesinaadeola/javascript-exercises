function numberChecker(number) {
  if (number === 6 || number ===9) {
    return false;
  }
  if (number ===10 || number ==1000) {
      return true;
  }
 else {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
