//trimStart() to remove whitespace characters from the beginning of a string
const str = '   JavaScript   ';
const result = str.trimStart(); //trimLeft() method is an alias of the trimStart()

console.log({ str }); //{ str: '   JavaScript   ' }
console.log({ result }); //{ result: 'JavaScript   ' }

//trimEnd returns a new string with removed whitespace from its end (right end).
var str = '  hello  '; //trimRight() method is an alias of the trimEnd() method.

console.log(str.length); // 8
str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '  hello