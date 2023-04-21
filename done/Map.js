let map = new Map()
let key = "key";
let value = "value";
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.clear();
map.size;

for (let [key2, value2] of map) {}
for (let elem of map.entries()) {}
for (let key2 of map.keys()) {}
for (let value2 of map.values()) {}

map = new Map(Object.entries({ name: "John", age: 30 }));

