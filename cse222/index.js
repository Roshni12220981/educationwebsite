const q = require('lodash');
const numbers =[1,2,3,4,5];
const doubleNumbers = q.map(numbers,n =>n*2);
console.log('Orginal numbers:',numbers);
console.log('Double numbers:',doubleNumbers);

const a=require('./add.js')
let p=a.add(2,4);
console.log(p);

const b=require('./sub.js')
let t=a.sub(8,4);
console.log(t);


