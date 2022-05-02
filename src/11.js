function greaterThan10(array) {
  return array.filter(number => {
    return number > 10;
  });
}

module.exports = {greaterThan10,};