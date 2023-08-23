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
let num = [1,2,3,4];
let another = num;

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


console.log(num);
console.log(another);