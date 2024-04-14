// COMMON JS, EVERY FILE IS MODUEL (BY DEFAULT)
// MODULES - ENCAPSULATED CODE (ONLY SHARE MINIMUM)

const {john, peter} = require("./4-name");
const sayHi = require("./5-utils");

console.log(sayHi);

sayHi("aditya");
sayHi(john);
sayHi(peter);
