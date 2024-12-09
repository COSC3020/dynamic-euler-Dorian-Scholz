const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');


const result = e(10);
const expected = 2.7182818011463845;


const tolerance = 1e-10;
assert(Math.abs(result - expected) < tolerance, `Expected ${expected}, but got ${result}`);

console.log("All tests passed!");

