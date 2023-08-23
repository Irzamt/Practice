// Finding Element Value Types
// const num = [5, 2, 3, 4, 1];
// console.log(num.indexOf(6));

// Finding Element Reference Types
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

// Arrow Function
// const course = courses.findIndex(course => course.id === 2);
// console.log(course);

//Removing Element
// const num = [1,2,3,4];

// // const last = num.pop(); //Last
// // console.log(last);

// // const first = num.shift(); //First
// // console.log(first);

// const mid = num.splice(2, 1); //Middle
// console.log(mid);
// console.log(num);

//7 - Emptying an Array
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

//8 Combing and Slicing Arrays
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

// 9 - Spread Operator
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

//11 - Joining Arrays
// const numbers = [1,2,3];
// const join = numbers.join(" ");  // Array to String
// console.log(join);

// const message = 'This is my first message';
// const parts = message.split(' '); // String to Array
// console.log(parts);

// const combined = parts.join(' ');
// console.log(combined);

//12 - Sorting Arrays
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