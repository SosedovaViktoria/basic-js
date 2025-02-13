const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let i = 1;
    let levels = 0;
    arr.forEach(el => {
        if (Array.isArray(el)) {
            levels = 1;
            levels += this.calculateDepth(el)
            if(levels > i){
              i = levels
            }
        }
    });
    return i
  }
}

module.exports = {
  DepthCalculator
};
