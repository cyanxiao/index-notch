let colorScheme = [
  "#24434e",
  "#3673ac",
  "#60a4da",
  "#d3da52",
  "#758b2c",
  "#a2a6a4",
  "#22b560",
  "#edce1f",
  "#fb0f26",
];

function _getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  return colorScheme[_getRandomInt(colorScheme.length)];
}

export default getRandomColor;
