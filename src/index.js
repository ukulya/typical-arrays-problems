
exports.min = function min (array) {
  return Math.min(...array);
}

exports.max = function max (array) {
  return Math.max(...array);
}

exports.avg = function avg (array) {
  const total = array.reduce((acc, c) => acc + c, 0);
  return total / array.length;
}
