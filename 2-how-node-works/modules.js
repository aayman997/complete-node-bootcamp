// console.log(arguments);
// console.log(require('module').wrapper);
//  Module.exports
// const C = require('./test-module-1');
// const calc1 = new C();
// const calc1 = new C2();

// const calc2 = require('./test-module-2');
const {add, multiply, divide} = require('./test-module-2');

// console.log(calc1.add(2, 5));

console.log(add(2, 5));
console.log(multiply(2, 5));
console.log(divide(6, 2));

// Caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
