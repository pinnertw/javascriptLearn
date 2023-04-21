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

let fruit = "apple";
let User = {
    name: "John",
    age: 30,
    [fruit]: 5,
};
console.log(user);
// Access with User.name, User.age, User["name"]. Delete with "delete User.name"
let name = "John", age = 30;
let us = {
    name,
    age,
    sayHi() {
        console.log("Hi " + this.name);
    }, // Attention, this is not strictly related to "object". It can appear in solo.
    toString() {
        return `{name: "${this.name}"`;
    },
    valueOf() {
        return this.age;
    },
}; // us.name = name, us.age = age.

console.log("name" in us); // Attribute exists test.

for (let key in us) {
    console.log(key, us[key]);
}


// Assign object.
let permissions1 = { canView: true };
let us2 = {};
Object.assign(us2, us, permissions1);

// Constructor
function UserClass(name) {
    this.name = name;
    this.isAdmin = false;
    if (new.target) { // If called with "new" operator.
        this.isAdmin = true;
    }

}
new UserClass("Ann");

// Return undefined if parent was not defined:
// user?.address?.street;
// obj?.[prop];
// obj.method?.();

// Symbol
let id = Symbol();

let id2 = Symbol.for("id");
let idAgain = Symbol.for("id");
// id === idAgain here.
// keyFor to look back from var to key.
