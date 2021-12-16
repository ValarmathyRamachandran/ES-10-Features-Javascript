const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat(); 

console.log(flatNumbers); //[1, 2, 3, 4, 5]

const numbers = [1, 2, [3, 4, 5, [6, 7]]]; //depth parameter how deep the method flats the array structure and defaults to 1.
const flatNumbers = numbers.flat(2); 

console.log(flatNumbers); //[1, 2, 3, 4, 5, 6, 7]

const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers = numbers.flat(Infinity);

console.log(flatNumbers);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

const numbers = [1, 2, , 4, , 5];
const sequence = numbers.flat(); //flat() method to remove the holes

console.log(sequence); //[ 1, 2, 4, 5 ]