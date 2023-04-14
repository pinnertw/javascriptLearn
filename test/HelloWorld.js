"use strict";
let message = "Hello, world!";
console.log(message);
message = "Hello, JavaScript!";
console.log(message);
const message2 = "Hello, JavaScript. This is a constant!";
console.log(message2);

// add n in the end to declare BigInt type.
const bigInt = 1234567891011121314151617188190n;
console.log(bigInt);
// Define string
let str =  "Hello";
let phrase = `${str} World`;
console.log(phrase);
// We can put expression in ${} too.
let message3 = `${str} 1 + 2 = ${1 + 2}`;
console.log(message3);
// boolean
let bool = true;
console.log(bool);
// null
let nullVar = null;
console.log(nullVar);
// undefined
let undefinedVar;
console.log(undefinedVar);
// typeof
console.log(typeof undefinedVar, typeof 10n, typeof true, typeof nullVar);

// Object, Symbol
//
//
// "my" + "string" = "mystring", "1" + 2 = "12"
// But not for "-", "*", "/", "**", "%"
// +true = 1, +"" = 0 (+ change type to int)
//
//
// use ?? to assign a default value;
let user;
console.log(user ?? "anonymous");
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = console.log(`Value at coords (${i},${j})`, '');
        if (!input) break outer;
    }
}

let x = 1;
switch(x) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

function test(from, text = "Default message") {
    console.log( from + ": " + text );
}

test();

let test2 = function (from, text = "Default message") {
    console.log( from + ": " + text );
};

// Lambda
let test3 = (arg1, arg2, arg3) => arg1 + arg2 + arg3;

// Mocha test
let assert = require("chai").assert;
function pow(x, n) {
    return x ** n;
}
describe("pow", function() {
    before(() => console.log("Before test"));
    after(() => console.log("After test"));
    beforeEach(() => console.log("Before each test"));
    afterEach(() => console.log("After each test"));
    it("Raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
    });
});


///// Object
let obj = new Object();
console.log(obj);
let obj2 = {};
console.log(obj2);

let User = {
    name: "John",
    age: 30
};
console.log(user);
