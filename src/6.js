function getCircleArea(radius) {
  return (3.14159265 * (radius ** 2)).toFixed(2)
}

function getCircleAreas(radiusArr) {
  let areasArr = [];

  for (var i = 0; i < radiusArr.length; i++) {
    const circleArea = getCircleArea(radiusArr[i]);
    areasArr.push(Number(circleArea));
  }

  return areasArr;
}

module.exports = {getCircleAreas,}
