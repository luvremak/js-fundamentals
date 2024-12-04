'use strict';

const methods = iface => Object.entries(iface)
  .filter(([, value]) => typeof value === 'function')
  .map(([key, value]) => [key, value.length]);

module.exports = { methods };

console.log(methods(iface));
