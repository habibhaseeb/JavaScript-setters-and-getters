const array = [1,2,3,4,5];
const copiedArr = array.with(0,5);
console.log(copiedArr , array);



// These JS methods modifies original array if you want to copy array and 
// then modify that copy of the array.

const languages = ['JavaScript','TypeScript','Python','C#'];
const reversed = languages.reverse();
console.log(reversed);
console.log(languages);

const check = Object.is(reversed , languages);
console.log(check);

// The with() in JavaScript solve this problem.

const other_Lang = ['c++','Java','Fortran'];
let customizedArr = other_Lang.with(0 , 'c++');
customizedArr = other_Lang.with(1 , 'Kotlin')
console.log(customizedArr);

// Array.from method

const copyArr = Array.from(languages).reverse()
console.log(copyArr);
console.log(Object.is(languages.reverse())); // false

// .toSorted method

const numbers = [5, 3, 10, 7, 1];
const sorted = numbers.toSorted();
console.log(sorted);
// => [ 1, 10, 3, 5, 7 ]
const sortedCorrect = numbers.toSorted((a, b) => a - b);
console.log(sortedCorrect);
// => [ 1, 3, 5, 7, 10 ]
