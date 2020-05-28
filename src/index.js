'use strict';
const $ = require('jquery');
import {greeting} from './say-hello';
import {add, subtract, multiply, divide} from './math';

let sayHello = name => "Hello " + name + ".";
console.log(sayHello('Bobbie'));

console.log(greeting ());
console.log(math.add(4,5));
console.log(math.divide(81, 9));
