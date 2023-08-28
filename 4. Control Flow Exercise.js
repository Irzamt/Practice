//1 - Max of 2 Numbers
//***************************************************************************************** */
function max(a, b){
    return (a > b) ? a : b;
}
let test1 = max(5, 29);
console.log(test1);
//***************************************************************************************** */

// 2 - Landscape or Portrait
//***************************************************************************************** */
function isLandscape (width, height){
    return (width > height);
}
let test2 = isLandscape(800, 1600);
console.log(test2);
//***************************************************************************************** */

//3 - FizzBuzz
//***************************************************************************************** */
function fizzBuzz (input){
    if (typeof input != 'number'){
        return NaN;
    }
    else if (input % 3 == 0 && input % 5 == 0){
        return "FizzBuzz";
    }
    else if (input % 3 == 0){
        return "Fizz";
    }
    else if (input % 5 == 0){
        return "Buzz";
    }
    else {
        return input;
    }
}
let test3 = fizzBuzz(50);
console.log(test3);
//***************************************************************************************** */

//4 - Demerit Points
//***************************************************************************************** */
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log("License Suspended");
  } else {
    console.log("Points", points);
  }
}
checkSpeed(75);
//***************************************************************************************** */

//5 - Even and Odd Numbers
//***************************************************************************************** */
function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}
showNumbers(6);
//***************************************************************************************** */

//6 - Count Truthy
//***************************************************************************************** */
function countTruthy(array){
    let count = 0;
    for (let value of array)
    if (value)
        count++;
    return count;
}

const array = [0, null, undefined, "", 2 , 3, NaN];
console.log(countTruthy(array));
//***************************************************************************************** */

//7 - String Properties
//***************************************************************************************** */
const movie = {
    title: 'a',
    releaseYear: 2008,
    rating: 4.5,
    director: 'b'
};

function showProperties(obj){
    for (let key in obj)
        if (typeof obj[key] !== 'string')
            console.log(key, obj[key]);
}

showProperties(movie);
//***************************************************************************************** */

//8 - Sum of Multiples 3 & 5
//***************************************************************************************** */
function sum(limit){
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    return sum;
}
console.log(sum(9));
//***************************************************************************************** */

//9 - Grade
//***************************************************************************************** */
function calGrade(marks){
    let sum = 0;
    for (let mark of marks)
        sum += mark;

    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C'; 
    if (average < 90) return 'B';
    return 'A';
}

console.log(calGrade([95, 89 , 96]));
//***************************************************************************************** */

//10 - Show Stars
//***************************************************************************************** */
function showStars(rows){
    for (let i = 1; i <= rows; i++){
        let pattern = '';
        for (let j = 0; j < i; j++)
            pattern += '*';
        console.log(pattern);
    }
}
showStars(5);
//***************************************************************************************** */

//11 - Show Prime Numbers
//***************************************************************************************** */
function showPrimes(limit){
    for (let number = 2; number <= limit; number++)
        if (isPrime(number))
            console.log(number);
}

function isPrime(number){
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}

console.log(showPrimes(5));
//***************************************************************************************** */