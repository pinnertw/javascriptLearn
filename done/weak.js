let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");

// Attention, only object are available for key in WeakMap
//
// only get/set/delete/has methods in weakmap.
