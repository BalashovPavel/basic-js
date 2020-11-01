const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  let df = parseFloat(sampleActivity);

  if(Number.isNaN(df) || typeof sampleActivity !== 'string' || df > 15 || df <= 0 )
  {
    return false;
  }
  
  return Math.ceil((Math.log(MODERN_ACTIVITY / df)) / 0.693 * HALF_LIFE_PERIOD);
};
