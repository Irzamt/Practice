//3 -  Finding Element Value Types
/********************************************************************************************************************** */

const num = [5, 2, 3, 4, 1];
console.log(num.indexOf(6));
/********************************************************************************************************************** */

//4 -  Finding Element Reference Types
/********************************************************************************************************************** */

// const courses = [
//     {id: 1, name:'a'},
//     {id: 2, name:'b'},
// ];
 
// const course = courses.find(function(course){
//     return course.id;
// })


// const course = courses.findIndex(function(course){
//     return course.id === 2;
// })
// console.log(course);
/********************************************************************************************************************** */

//5 - Arrow Function
/********************************************************************************************************************** */

// const course = courses.findIndex(course => course.id === 2);
// console.log(course);
/********************************************************************************************************************** */

//6 -Removing Element
/********************************************************************************************************************** */

// const num = [1,2,3,4];

// // const last = num.pop(); //Last
// // console.log(last);

// // const first = num.shift(); //First
// // console.log(first);

// const mid = num.splice(2, 1); //Middle
// console.log(mid);
// console.log(num);
/********************************************************************************************************************** */

//7 - Emptying an Array
/********************************************************************************************************************** */

// let num = [1,2,3,4];
// let another = num;

//Sol 1
// num = []

//Sol 2
// num.length = 0;

//Sol 3
// num.splice(0, num.length) 

//Sol 4
// while (num.length > 0){
//     num.pop();
// }


// console.log(num);
// console.log(another);
/********************************************************************************************************************** */

//8 Combing and Slicing Arrays
/********************************************************************************************************************** */

// const first = [1,2,3];
// const second = [4,5,6];

// const combine = first.concat(second);
// console.log(combine);
// const slice = combine.slice(2,4)
// console.log(slice);

// a = { x: 10 };
// b = a;

// console.log(a.x = 20);
// console.log(b);
/********************************************************************************************************************** */

// 9 - Spread Operator
/********************************************************************************************************************** */

// const combined = [...first, 'a' ,...second, 'b'];
// console.log(combined);

// const copy = [...combined]
// console.log(copy);

//10 - iterating an array
// const num = [1,2,3] 

// for (let nums of num)
//     console.log(nums);

// num.forEach((number, index) => console.log(index, number));

// for (let i = 0; i < num.length; i++) 
//     console.log(num[i]);
/********************************************************************************************************************** */

//11 - Joining Arrays
/********************************************************************************************************************** */

// const numbers = [1,2,3];
// const join = numbers.join(" ");  // Array to String
// console.log(join);

// const message = 'This is my first message';
// const parts = message.split(' '); // String to Array
// console.log(parts);

// const combined = parts.join(' ');
// console.log(combined);
/********************************************************************************************************************** */

//12 - Sorting Arrays
/********************************************************************************************************************** */

// const courses = [
//     { id: 1, name: 'Node:js'},
//     { id: 2, name: 'JavaScript'}
// ];

// courses.sort(function(a, b){
//     const

//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// })
// console.log(courses);
/********************************************************************************************************************** */

//13 - TEsting the elements of an array
/********************************************************************************************************************** */

// const numbers = [1,-1,2,3];
// const allPositive = numbers.every(function(value){ // every checks to see if every element in a given array matches the given condition
//     return value >= 0;
// });

// console.log(allPositive);

// const atLeastOnePositive = numbers.some(function(value){ // some checks to see if atleast one element in a given array matches the given condition
//     return value >= 0;
// });

// console.log(atLeastOnePositive);
/********************************************************************************************************************** */

//14 - Filtering an Array
/********************************************************************************************************************** */

// const numbers = [1,-1,2,3];
// // const filtered = numbers.filter(function(value){
// //     return value >= 0;
// // });
// const filtered = numbers.filter(n => n >= 0); //By using Arrow Function
// console.log(filtered);
/********************************************************************************************************************** */

//15 - Mapping an Array
/********************************************************************************************************************** */

// const numbers = [1,-1,2,3];

// const filtered = numbers.filter(n => n >= 0);
// const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>'; //Map numbers in html list
// console.log(html);

// const html = '<ul>' + //Mapping using chaining method
//   numbers
//     .filter(n => n >= 0)
//     .map(n => '<li>' + n + '</li>')
//     .join('') +
//   '</ul>';

// console.log(html);

// const items = numbers  // Map numbers in Objects
//     .filter(n => n >= 0)
//     .map(n => ({ value: n}))
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value);

// console.log(items);
/********************************************************************************************************************** */

// 16 - Reducing an Array
/********************************************************************************************************************** */

const numbers = [1,-1,2,3];

// let sum = 0;
// for (let n of numbers)
//     sum += n; 

// console.log(sum);

// const sum = numbers.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue;
// }, 0)

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
