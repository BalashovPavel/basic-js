const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("It's not array");
  }

  const DISCARD_NEXT = '--discard-next';
  const DISCARD_PREV = '--discard-prev';
  const DOUBLE_NEXT = '--double-next';
  const DOUBLE_PREV = '--double-prev';

  let tarray = Array.from(arr);
  for (let index = 0; index < tarray.length; index++) {
    switch (tarray[index]) {
      case DISCARD_NEXT:

        if (index + 1 < tarray.length) {
          tarray[index + 1] = tarray[index] = undefined;
        } else {
          tarray[index] = undefined;
        }
        break;

      case DISCARD_PREV:

        if (index === 0 || tarray[index - 1] === undefined) {
          tarray[index] = undefined;
        } else {
          tarray[index - 1] = tarray[index] = undefined;
        }
        break;

      case DOUBLE_NEXT:
        
        if (index + 1 < tarray.length) {
          tarray[index] = tarray[index + 1];
        } else {
          tarray[index] = undefined;
        }
        break;

      case DOUBLE_PREV:
        
        if (index > 0 && tarray[index - 1] !== undefined) {
          tarray[index] = tarray[index - 1];
        } else {
          tarray[index] = undefined;
        }
        break;
    }
  }

  return tarray.filter(item => item !== undefined);
};
