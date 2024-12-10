'use strict';

const pipe = (...fns) => {
  if (fns.some(fn => typeof fn !== 'function')) {
    throw new TypeError('All arguments to pipe must be functions');
  }
  return (x) => fns.reduce((value, fn) => fn(value), x);
};

module.exports = { pipe };
