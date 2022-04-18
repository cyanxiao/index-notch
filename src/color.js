let colorScheme = ["#142d3b", "#ed9118", "#e74f23", "#f6b95b", "#d7d5d6"];

function _getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  return colorScheme[_getRandomInt(colorScheme.length)];
}

export default getRandomColor;
