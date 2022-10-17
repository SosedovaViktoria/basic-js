const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  let isCommand = false;
  for( let q = 0; q < arr.length; q++){
    if(typeof arr[q] === 'string' || arr[q] instanceof String){
      switch(arr[q]){
        case '--discard-next':
          if(q < arr.length-1)
            arr.splice(q+1, 1);
          isCommand = true;
          break;
        case '--discard-prev':
          if(q > 0){
            arr.splice(q-1, 1);
            q--;
          }
          isCommand = true;
          break;
        case '--double-next':
          if(q < arr.length-1)
            arr.splice(q+1, 0, arr[q+1]);
          isCommand = true;
          break;
        case '--double-prev':
          if(q > 0 ){
            arr.splice(q-1, 0, arr[q-1]);
            q++;
          }
          isCommand = true;
          break;
      }
      if(isCommand){
        arr.splice(q, 1);
        q--;
        isCommand = false;
      }
    }
  }

  return arr;
}

module.exports = {
  transform
};
