let user = { };

Object.defineProperty(user, "name", {
  value: "John",
  // 对于新属性，我们需要明确地列出哪些是 true
  writable: true,
  enumerable: true,
  configurable: true
});

alert(user.name); // John
user.name = "Pete"; // Error

Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});


let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));


Object.preventExtensions(obj); // prevent add attribute.
Object.seal(obj); // prevent add/delete attributes.
Object.freeze(obj); // Freeze, configurable: false and writable: false.

let obj = {
    get propName() {
    },
    set propName(value) {
    }
};

let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;


class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("Rabbit");
rabbit instanceof Rabbit; // true;
