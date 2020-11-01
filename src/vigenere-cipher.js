const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(data = true) {
    this.data = data;
  }

  encrypt(a, b) {
    return this.crypt(a, b, false);
  }

  decrypt(a, b) {
    return this.crypt(a, b, true);
  }

  symCode(c) {
    return c.charCodeAt(0) - 'A'.charCodeAt(0);
  }

  shift(c, d) {
    let cod = this.symCode(c);
    return String.fromCharCode((cod + d) % 26 + 'A'.charCodeAt(0));
  }

  crypt(a, b, dec) {
    if (a === undefined || b == undefined) {
      throw new Error();
    }

    a = a.toUpperCase();
    b = b.toUpperCase();

    let array = [];
    let coded = 0;
    for (let i = 0; i < a.length; ++i) {
      if (a[i] >= 'A' && a[i] <= 'Z') {
        if (dec) {
          array.push(this.shift(a[i], 26 - this.symCode(b[coded % b.length])));
        } else {
          array.push(this.shift(a[i], this.symCode(b[coded % b.length])));
        }
        coded++;
      } else {
        array.push(a[i]);
      }
    }

    if (!this.data) {
      array.reverse();
    }

    return array.join('');
  }
}

module.exports = VigenereCipheringMachine;