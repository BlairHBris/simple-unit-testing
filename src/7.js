function getCircleArea(radius) {
  const pi = Math.PI;
  const  rSquared = Math.pow(radius, 2);

  return Number((pi * rSquared).toFixed(2))
}

module.exports = {getCircleArea,}
