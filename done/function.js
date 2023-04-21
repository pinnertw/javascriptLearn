function sumAll(...args) {
    let sum = 0;
    for (let arg  of args) sum += arg;
    return sum;
} // Rest

function showName() {
    for (let arg of arguments) console.log(arg);
} //  arguments, old.

console.log( Math.max(...[1,2,3,4,5]) ); // Spread.

console.log(showName.name); // "showName"
console.log(showName.length); // 0

let sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest");
  }
};
// In this case, func() won't work.
//
// new function
let sum = new Function('a', 'b', 'return a + b');
// no outer variables, useful while compressing.
//
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// clearTimeout(timerId);
// timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// clearInterval(timerId);
//
timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

// Decorator.
function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// 使用 call 将不同的对象传递为 "this"
sayHi.call( user ); // John
sayHi.call( admin ); // Admin

// binding, maintain context (this)
// let boundFunc = func.bind(context);
