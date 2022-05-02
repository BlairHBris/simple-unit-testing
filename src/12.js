function sliceAndSort(array) {
  const newArray = array.slice();
  newArray.sort();
  return [newArray[1], newArray[2]];
};

module.exports = {sliceAndSort,}