//1-  OOP
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function (){     //Method
//         console.log("draw");
//     }
// };

// circle.draw(); // calling Method
// console.log(circle.location);

//2- Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw () {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

//3 - Constructor Functions
// function Circle (radius){
//     this.radius = radius;
//     this.draw = function (){
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);
// circle.draw();

//4 - Dynamic Nature of Objects
// const circle = {
//     radius: 1
// };

// circle.color = 'yellow'; // adding a property to circle object
// circle.draw = function(){}; // adding a Method to circle object

// delete circle.draw // delete the draw method

// console.log(circle);

//6 -  Functions are Objects
// function Circle (radius){
//     this.radius = radius;
//     this.draw = function (){
//         console.log('draw');
//     }
// }

// Circle.call ({}, 1);
// Circle.apply ({}, [1, 2, 3]);

// const another = new Circle(1);
// console.log(another);

//7 - Value v/s Refernece Types
// let x = {value: 10};
// let y = x;

// x.value = 20;
// console.log(x, y);

//Primitives are copied by their value
// Objects are copied by thier refernece

// let obj = { value:10 };
// function increase(obj){
//     obj.value++;
// }
// increase(obj);
// console.log(obj);

//8 - Enumerating Properties of an Object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle){
//     console.log(key, circle[key]);
// }
// for (let key of Object.keys(circle)){
//     console.log(key);
// }
// for (let entry of Object.entries(circle)){ // Iterating the Object as Array
//     console.log(entry);
// }

// if ('radius' in circle) // Checking the function in object
//     console.log('yes');

// Cloning an Object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// const another = Object.assign ({}, circle)

// const another = {...circle};

// console.log(another);

