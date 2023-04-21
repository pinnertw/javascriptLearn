let billion = 1_000_000_000;
let billion2 = 1e9;
let twofivefive = 0xff;
let binaryTwoFiveFive = 0b11111111;
let octetTwoFiveFive = 0o377;

// Base.
console.log(billion.toString(16)); // max = 36.
console.log(1e3.toString(36));

// Rounding
console.log(Math.floor(3.1));
console.log(Math.ceil(3.1));
console.log(Math.trunc(3.1));
console.log(12.34.toFixed(1));

// 0 and -0 are different
// isNaN(NaN)
// isFinite(Infinity) -> false;
// parseInt('100px') -> 100
// parseFloat('12.5em')); -> 12.5
//
//
//
// parseInt('0xff', 16);
// parseInt('ff', 16);
// Math.random() (between 0 and 1, 1 excluded
// Math.max(2, 3, 4, 5);
// Math.min(3, 12, 2 4);
// Math.pow(2, 10);
//
//
// `String`.length
// `String`.charAt(0) = `String`[0]
// String are not modifiable.
// `String`.toUpperCase()
// `String`.toLowerCase()
//
//
// `String`.indexOf(substring, index)
// `String`.indexOf(substring)
// `String`.lastIndexOf(substring, index)
//
// ~x = -(x + 1) if x is 32 bits
// `String`.includes(substring, position)
// `String`.startsWith(substring);
// `String`.endsWith(substring);
// str.slice(start [, end]);
// str.substring(start, [,end]) // Allow start > end.
// str.substr(start, [,length])
// "z".codePointAt(0)
// str.trim()  // Remove whitespace from both ends.
// str.repeat(n) // Repeat a string n times.
console.log(String.fromCodePoint(2 ** 16, 2 ** 17));

// 'Österreich'.localeCompare('Zealand')
//
