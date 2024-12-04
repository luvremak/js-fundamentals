'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = ip.split('.');

  return fn.reduce((acc, fn) => {
    return (acc << 8) + Number(fn);
  }, 0);
};

console.log(ipToInt());
module.exports = { ipToInt };

