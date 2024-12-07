'use strict';
/* 1 
Use for loop and accumulator variable
to calculate sum of all given arguments
For example sum(1, 2, 3) should return 6
*/

const sum1 = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    console.log(total);
  }; 

sum1(1, 2, 3); // returns: 6


/* 2
Use for..of loop and accumulator variable
to calculate sum of all given arguments
For example sum(1, 2, 3) should return 6
*/

const sum2 = (...args) => {
    let total = 0;
    for (const num of args) {
      total += num;
    }
    console.log(total);
  };
  
sum2(1, 2, 3);


/* 3
Use while loop and accumulator variable
to calculate sum of all given arguments
For example sum(1, 2, 3) should return 6
*/

const sum3 = (...args) => {
    let total = 0;
    let i = 0;
    while (i < args.length) {
      total += args[i];
      i++;
    }
    console.log(total);
};

sum3(1, 2, 3);


/* 4
Use do..while loop and accumulator variable
to calculate sum of all given arguments
For example sum(1, 2, 3) should return 6
*/

const sum4 = (...args) => {
    let total = 0;
    let i = 0;
    if (args.length === 0) return total; 
    do {
      total += args[i];
      i++;
    } while (i < args.length);
    console.log(total);
  };
  
sum4(1, 2, 3);


/* 5
Use Array.prototype.reduce method
to calculate sum of all given arguments
For example sum(1, 2, 3) should return 6
*/

const sum5 = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
  };
  
console.log(sum5(1, 2, 3));


