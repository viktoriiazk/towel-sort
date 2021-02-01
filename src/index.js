
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  matrix !== undefined ? matrix.map((el, index) => {
    index % 2 ? el.reverse() : false;
    result.push(...el);
  }) : result;

  return result;
};
