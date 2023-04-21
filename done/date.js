let now = new Date(); // prefer Date.now();
console.log(now);

let date = new Date("2017-01-26");
console.log(date);
// new Date(year, month, date, hours, minutes, seconds, ms)
date.getFullYear();
date.getMonth();
date.getDate();
// Hours, Minutes, Seconds, Milliseconds
//
date.getDay(); // Day of the week at local time.
date.getUTCHours();
// setters with setHours, setMinutes, setSeconds, setMilliseconds
//
date.setDate(date.getDate() + 2);

Date.parse("2017-01-26"); // return milliseconds.
