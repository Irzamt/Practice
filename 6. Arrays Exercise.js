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

function move(array, index, offset){
    const position = index + offset;
    if (position >= array.length || position < 0){
        console.error('Invalid Offset');
        return
    }

    const output = [...array];
    const element = output.splice(index, 1,) [0];
    output.splice(index + offset, 0, element);
    return output;
}

const numbers4 = [1,2,3,4];
const output1 = move(numbers4, 1, 1);
console.log(output1);

// 5 - 
/********************************************************************************************************************** */