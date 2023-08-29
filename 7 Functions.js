//1 - Function Declarations v/s Expressions
/********************************************************************************************************************* */
// Function Declaration
// function walk(){
//     console.log('walk');
// }
/*---------------------------------------------------------------------------------------------------------------------*/
// // Named Function Expression
// let run = function walk(){
//     console.log('run');
// };
/*---------------------------------------------------------------------------------------------------------------------*/
// // Anonymous Function Expression
// let run1 = function(){
//     console.log('run');
// };
// let move = run1

// run();
// move();
/********************************************************************************************************************* */

// 2 - Hoisting
/********************************************************************************************************************* */
/* We can call a function that is defined using the function declaration syntax before it's defination, but why is that?
The reason for this is because when our JavaScript engine executes the code, it moves all the function declarations to the
top, at run time. This is what we called hoisting.*/
/* Hoisting is the process of moving function declarations to the top of the file. And this is done automatically by the JavaScript
Engine that is executing this code. So that's the reason we can call functions that are defined using the function declaration syntax
before their defination.*/

// walk();

// function walk(){
//     console.log('walk');
// }
/********************************************************************************************************************* */

// 3 - Arguments
/********************************************************************************************************************* */
// function sum (a, b){
//     return a + b; // 1 + undefined = NaN..........The same will happen if we don't pass any argument
// }
// console.log(sum(1));
/*---------------------------------------------------------------------------------------------------------------------*/
// function sum (a, b){
//     console.log(arguments); // This shows all the arguments that are passed when the function is called
//     return a + b;
// }
// console.log(sum(1, 2, 3, 4, 5)); // No matter how many arguments we pass, Only the first 2 will be executed
/*---------------------------------------------------------------------------------------------------------------------*/
// function sum (){
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }
// console.log(sum(1,2,3,4,5));
/********************************************************************************************************************* */

// 4 - The Rest Operator
/********************************************************************************************************************* */
/* When we apply the rest operator to a parameter of a function, we can pass a varying number of arguments and the rest operator will
take all of them and  put them in an array*/
/* There cannot be a parameter after rest  parameter........Rest Parameter must be last formal parameter*/

// function sum(...args) {
//   console.log(args);
// }
// console.log(sum(1, 2, 3, 4, 5, 10));
/*---------------------------------------------------------------------------------------------------------------------*/
// function sum (...args){
//     return args.reduce((a,b) => a + b);
// }
// console.log(sum(1, 2, 3, 4, 5, 10));
/*---------------------------------------------------------------------------------------------------------------------*/
// function sum (discount, ...prices){
//     const total =  prices.reduce((a,b) => a + b);
//     return total * (1 - discount);
// }
// console.log(sum(0.1, 20, 30));
/********************************************************************************************************************* */

// 5 - Default Parameters
/********************************************************************************************************************* */
// function interest (principal, rate = 3.5, years = 5){
//     return principal * rate / 100 * years;
// }
// console.log(interest(10000));

/* For best practice, whenever we want to use the function parameter a default value, make sure that parameter is last parameter
in the list, or give all the parameters after that a default value*/
/********************************************************************************************************************* */

// 6 - Getters and Setters
/********************************************************************************************************************* */
// const person = {
//     firstName: 'Irzam',
//     lastName: 'Tahir',
//     get fullName() { //getter
//          return `${person.firstName} ${person.lastName}`
//     },
//     set fullName (value){
//       const parts = value.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
// };

// person.fullName = 'Mosh Hamedani';

// console.log(person);

// /* getters => access Properties
//    setters => change (mutate) them*/
/********************************************************************************************************************* */

// 7 - Try and Catch (Error Handling)
/********************************************************************************************************************* */
// const person = {
//        firstName: 'Irzam',
//        lastName: 'Tahir',
//        get fullName() { //getter
//             return `${person.firstName} ${person.lastName}`
//        },
//        set fullName (value){
//          const parts = value.split(' ');
//          this.firstName = parts[0];
//          this.lastName = parts[1];
//        }
//    };

//    person.fullName = true;

//    console.log(person); // Gives error because we have applied methods that are used on strings and can't be used on booleans and any other data type

/* In situations like this, we should do error handling at the begining of a function or a method, this is what we call
defensive programming. So we want to make sure that values coming in are valid so, we can excute our logic*/

// const person = {
//   firstName: "Irzam",
//   lastName: "Tahir",
//   get fullName() {
//     //getter
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) { //setter
//     if (typeof value !== "string") throw new Error("Value is not a string.");

//     const parts = value.split(" ");
//     if (parts.length !== 2)
//       throw new Error ('Enter a first and last name');

//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// try{
//    person.fullName = '';
// }
// catch (e){
//    alert (e);
// }

// console.log(person);
