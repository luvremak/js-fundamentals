'use strict';

const fn = () => {
  const obj1 = { name: 'Alice' };

  let obj2 = { name: 'Bob' };

  obj1.name = 'Sofia';  
  obj2.name = 'Bohdana';    

  obj2 = { name: 'Victoria' };

  console.log(obj1); 
  console.log(obj2); 
};

module.exports = { fn };
