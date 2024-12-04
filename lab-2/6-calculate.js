'use strict';

'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const results = [];
  const start = 0;
  const end = 9;
  
  for (let i = start; i <= end; i++) {
    const square = square(i);
    const cube = cube(i);
    const average = average(square, cube);
    results.push(average);
  }

  return results;
};

module.exports = { square, cube, average, calculate };
