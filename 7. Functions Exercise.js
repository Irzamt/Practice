// 1 - Sum of Arguments
/****************************************************************************************************************** */
// function sum (...items){
//     return items.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4));
//--------------------------------------------------------------------------------------------------------------------
// function sum (...items){
//     if (items.length === 1 && Array.isArray(items[0]))
//         items = [...items[0]];

//     return items.reduce((a, b) => a + b);
// }

// console.log(sum([1, 2, 3, 4]));
/****************************************************************************************************************** */

// 2 - Area of Circle
/****************************************************************************************************************** */
// const circle = {
//     radius: 1,
//     get getRadius(){
//         return this.radius;
//     }, 
//     set setRadius(value){
//         return value;
//     },
//     get getArea(){
//         return Math.PI * this.radius ** 2;
//     },
//     set setArea(value){
//         if (typeof value !== 'number')
//             throw new Error('Value should be a number')
//     }
// };
// circle.radius = 2;

// console.log(circle.getArea);