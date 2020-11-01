const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  } else if (date instanceof Date === false) {
    throw new Error();
  } else if (date.getMonth !== Date.prototype.getMonth) {
    throw new Error();
  }
  
  let m = date.getMonth();

  if ((m >= 0 && m <= 1) || m === 11) {
    return 'winter';
  } else if (m >= 2 && m <= 4) {
    return 'spring';
  } else if (m >= 5 && m <= 7) {
    return 'summer';
  } else if (m >= 8 && m <= 10) {
    return 'autumn';
  }
}
