let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

let arr1 = ["it's Sunny in", "", "Chennai"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["Chennai"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "Chennai"]

let  arrayNumber= [1, 2, 3, 4];
console.log(arrayNumber.map(number => [number * 3])); 
//[[3], [6], [9], [12]]
console.log(arrayNumber.flatMap(number => [number * 3]));
// [3, 6, 9, 12]