const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 if(!str) return '';
  let arr = str.split('');
  let result = [[1, arr[0]]];
  for(let i = 1; i< arr.length; i++) {
    if(arr[i - 1] == arr[i]) {
       result[result.length-1][0] += 1;
    } else {
      result.push([1, arr[i]]);
    }
  }
  return  result.flat().join('').replace(new RegExp("[1]", "g"), "");
}

module.exports = {
  encodeLine
};
