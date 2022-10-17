const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let n_ = String(n);
  let res = [];
  for(let i = 0; i < n_.length; i++){
      res.push(n_.replace(n_[i],''))
  }
  let n_n = 0;
  n_n = Math.max.apply(null, res);
  return n_n
}

module.exports = {
  deleteDigit
};
