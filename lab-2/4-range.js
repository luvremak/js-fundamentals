'use strict';

const range = (start, end) => {
  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new TypeError('Start and end must be numbers');
  }

  if (start > end) return [];

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

module.exports = { range };

