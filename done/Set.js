let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits，一些访客来访好几次
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set 只保留不重复的值
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John（然后 Pete 和 Mary）
}
set.delete(john);
set.has(john);

set.clear();
