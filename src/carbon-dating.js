const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let HALF_LIFE_PERIOD = 5730;
  let MODERN_ACTIVITY = 15.0;
  let Ln_2 = 0.693;
  let k = 0;
  if(sampleActivity === undefined || sampleActivity === null || !(typeof sampleActivity === "string") || sampleActivity > 15 || sampleActivity <= 0){
      return false;
  }
  else if((!isNaN(sampleActivity) && sampleActivity.toString().indexOf('.') != -1) || sampleActivity.match(/^\d+$/) ){
      k = Ln_2 / HALF_LIFE_PERIOD;
      let N_t = Math.log(MODERN_ACTIVITY/sampleActivity);
      t = Math.ceil(N_t / k);
      return t;
  }
  else {
      return false
  }

}

module.exports = {
  dateSample
};
