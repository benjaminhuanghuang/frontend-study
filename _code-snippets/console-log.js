let i = 1,
  j = 2,
  k = 3;

console.log({ i });
console.log({ j });
console.log({ i, j, k });



// add css style and clean css
console.log('%cHello, %cWorld', 'color: blue; font-size: 40px;', "");


// display object or array
console.table([
    { name: 'John', age: 23 },
    { name: 'Jane', age: 24 },
    { name: 'Jim', age: 25 }
]);

// group
console.group('group 1');
console.groupCollapsed('group 1');

console.log("Hello World");
console.log('Hello World');
console.groupEnd();


// show call stack
console.trace('Show me');


// time
console.time('fetching data');
console.timeEnd('fetching data');