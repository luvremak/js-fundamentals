'use strict';

const array = () => {
  const data = [];

  const get = (i) => {
    return data[i];
  };

  const push = (x) => {
    data.push(x);
  };

  const pop = () => {
    return data.pop();
  };

  return {
    get,
    push,
    pop,
  };
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr.get(0)); 
console.log(arr.get(1)); 
console.log(arr.get(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 

