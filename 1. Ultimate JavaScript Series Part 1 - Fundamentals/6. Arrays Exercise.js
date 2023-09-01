//1 - Array from range
/********************************************************************************************************************** */

// function arrayFromRange(min, max){
//     const output = [];
//     for (let i = min; i <= max; i++){
//         output.push(i);
//     }
//     return output;
// }

// const numbers1 = arrayFromRange (1, 100);
// console.log(numbers1);
/********************************************************************************************************************** */

//2 - Includes
/********************************************************************************************************************** */

// function includes(array, searchElement){
//     for (let i = 0; i <= array.length; i++){
//         if (array[i] === searchElement){
//             return true;
//         }
//     }
//     return false;
// }

// const numbers2 = [1,2,4];
// console.log(includes(numbers2, 3));

/********************************************************************************************************************** */

//3 - Except
/********************************************************************************************************************** */

// function except (array, exclude){
//     const output = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] !== exclude){
//             output.push(array[i]);
//         }
//     }

//     return output;
// }

// const numbers3 = [1,2,3,4,1,1];
// output = except (numbers3, 1);
// console.log(output);
/********************************************************************************************************************** */

// 4 - Moving an Element
/********************************************************************************************************************** */

// function move(array, index, offset){
//     const position = index + offset;
//     if (position >= array.length || position < 0){
//         console.error('Invalid Offset');
//         return
//     }

//     const output = [...array];
//     const element = output.splice(index, 1,) [0];
//     output.splice(index + offset, 0, element);
//     return output;
// }

// const numbers4 = [1,2,3,4];
// const output1 = move(numbers4, 1, 1);
// console.log(output1);
/********************************************************************************************************************** */

// 5 - Count Occurences
/********************************************************************************************************************** */

// const numbers5 = [1, 2, 3, 4, 1];
// const count = countOccurences(numbers5, 1);
// console.log(count);

// function countOccurences(array, searchElement){
//     // let count = 0;
//     // for (let i = 0; i <= array.length; i++){
//     //     if (array[i] === searchElement){
//     //         count++;
//     //     }
//     // }
//     // return count;

//     // return array.reduce((accumulator, current) => { // By reduce method
//     //     const occurence = (current === searchElement) ? 1 : 0;
//     //     console.log(accumulator, current, searchElement);
//     //     return accumulator + occurence;
//     // }, 0);
// }
/********************************************************************************************************************** */

// 6 - Get Max
/********************************************************************************************************************** */

// function max(array){
//     if (array.length === 0)
//         return undefined;

//     // let max = array[0];

//     // for (let i = 0; i < array.length; i++){
//     //     if (array[i] > max)
//     //         max = array[i];
//     // }
//     // return max;

//     return array.reduce((a, b) => (a > b) ? a : b); // By reduce Method
// }


// const numbers6= [1, 2, 3, 4];
// const output2 = max(numbers6);
// console.log(output2);
/********************************************************************************************************************** */

// 7 - Movies
/********************************************************************************************************************** */

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

const titles = movies
    .filter(m => m.year ===  2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);