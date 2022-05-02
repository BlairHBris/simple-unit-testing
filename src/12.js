function sliceSubtraction(array) {
  const newArray = array.slice();
  newArray.sort(function(x, y) {
    return x - y;
  });
  return [newArray[0], newArray[1]];
};

module.exports = {sliceSubtraction,}