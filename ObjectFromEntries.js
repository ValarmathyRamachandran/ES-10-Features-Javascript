//Object.fromEntries() method to transform a list of key-value pairs into an object.

const arr = [
    ['firstName', 'John'],
    ['lastName', 'Doe'],
    ['age', 20]
];

const person = Object.fromEntries(arr);

console.log(person); //{firstName: "John", lastName: "Doe", age: 20}

//Object.fromEntries() method to convert a Map to an Object:
const config = new Map();

config.set('type', 'database');
config.set('duration', 30);

const cache = Object.fromEntries(config);
console.log(cache); //{type: "database", duration: 30}

//Object.fromEntries() to convert a query string of a URL to an object whose each property is a parameter
const params = 'type=listing&page=2&rowCount=10';
const searchParams = new URLSearchParams(params);

console.log(Object.fromEntries(searchParams)); //{type: "listing", page: "2", rowCount: "10"}

//Uncaught TypeError: undefined is not iterable at Function.fromEntries (<anonymous>)
console.log(Object.fromEntries(null));
console.log(Object.fromEntries(undefined));
console.log(Object.fromEntries(true));
console.log(Object.fromEntries(100));
console.log(Object.fromEntries("Hi"));
console.log(Object.fromEntries([1,2,3]));

