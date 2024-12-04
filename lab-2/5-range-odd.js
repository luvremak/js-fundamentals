'use strict';

const rangeOdd = (start, end) => {
  if (typeof start !== 'number' || typeof end !== 'number') {
    throw new TypeError('Start and end must be numbers');
  }

  if (start > end) return [];

  if (start % 2 === 0) start += 1;

  const result = [];
  for (let i = start; i <= end; i += 2) {
    result.push(i);
  }

  return result;
};

console.log(rangeOdd(100, 300)); 

module.exports = { rangeOdd };
