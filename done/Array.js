let arr = new Array();
let arr2 = [];
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]);
fruits[0] = "Banana";
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits.at(-1));

// operator
fruits.push("Grapes");
fruits.pop();
fruits.shift(); // shiftLeft
fruits.unshift("Strawberry"); // Add element at the beginning.

console.log(fruits);
fruits.length = 0; // Clear array.


// arr.splice(start[, deleteCount, elem1, ..., elemN]);
// -> start at position start, delete deleteCount elements and add elem1, ..., elemN at current position.
// arr.slice([start], [end]);
// arr.concat(arg1, arg2, ...); = arr + arg1 + arg2, arg can be Array, too.
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
// indexOf, includes, lastIndexOf are available.
let result  = fruits.find(function(item, index, array) {
    return item == "Orange";
});
let results = fruits.filter(function(item, index, array) {
    return true;
});

results = fruits.map(function(item, index, array) {
    return item.toUpperCase();
});

arr = [1, 2, 15, 3, 2];
arr.sort(function(a, b) { return a - b; });
console.log(arr);
arr.reverse();
console.log(arr);


// From string
let names = "Bilbo, Gandalf, Nazgul";
arr = names.split(', ');
for (let name of arr) {
    console.log(name);
}

names = arr.join(", ");
console.log(names);


arr.reduce(function(accumulator, item, index, array) {
}, [initial]);

arr.reduceRight(function(accumulator, item, index, array) {
    
}, [initial]);

Array.isArray({});


// some, every, fill, copyWithin, flat, of
//
let range = {
  from: 1,
  to: 5
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {

  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 现在它可以运行了！
for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}
/*
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}
*/
// Array.from(arrayLike);
//
let [firstName, surname, ...rest] = ["Bilbo", "Gandalf", "none", "of", "these"];
[firstName, surname] = [surname, firstName];

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
// This method can be used in functions, too.
