const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let a = Math.pow(2, disksNumber) - 1;
  let b = Math.floor(a/turnsSpeed * 3600);
  let result =  {turns: a, seconds: b};
  return result;
};
