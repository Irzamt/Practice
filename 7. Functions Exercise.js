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
/**************************************************************************************************************** */
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
/**************************************************************************************************************** */

// 3 - Error Handling
/**************************************************************************************************************** */
function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array');

    return array.reduce((a, b) => {
        const occurence = b === searchElement ? 1 : 0;
        return a + occurence;
  }, 0);
};

try{
    const numbers = [1,2,3,4,1];
    const count = countOccurences(null, 1);
    console.log(count); 
}
catch (e){
    console.log(e.message);
}
