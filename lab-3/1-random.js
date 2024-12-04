'use strict';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { random };

console.log(random(120, 150));
