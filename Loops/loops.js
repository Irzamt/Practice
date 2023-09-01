//Example 1
/******************************************************************* */
// let i = 1;
// while (i < 10){
//     console.log(i);
//     i++;   // i = i + 1
// }

//Example 2
/******************************************************************* */
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0){
//     if (someArray[0] === "Jacky"){
//         console.log("Found her!");
//         notFound = false;
//     }
//     else{
//         someArray.shift();
//     }
// }

//Example 3
/******************************************************************* */
//Fibonacchi Sequence
// let a = 12;
// let b = 8;
// let c;
// c = a;
// a = b;
// b = c;

// console.log(`a: ${a}`);
// console.log(`b: ${b}`);

// let a = 0;
// let b = 1;
// let temp;
// let fibArray = [];

// while (fibArray.length < 25){
//     fibArray.push(a);
//     temp = a + b;
//     a = b;
//     b= temp;
// }
// console.log(fibArray);

//Excercise 2
/******************************************************************* */
// Step 1: Set the starting counter to 0
// let counter = 0;

// // Step 2: Create a variable to increase the counter by
// const step = 10;

// // Step 3: Add a do-while loop
// do {
//   // Print the counter to the console
//   console.log("Counter:", counter);

//   // Increment the counter by the step amount
//   counter += step;
// } while (counter < 111); // Step 4: Continue looping until counter is equal to or more than 100

//Excercise 3
/******************************************************************* */
// let myWork = [];

// for (let i = 1; i <= 10; i++){
// let myObj = {};

//     if(i % 2 == 0){
//         myObj.Lesson = i;
//         myObj.status = true;
//     }
//     else{
//         myObj.Lesson = i;
//         myObj.status = false;
//     }
//     myWork.push(myObj);

// }
// console.log(myWork);

//
// let arr = [];
// for (let i = 0; i < 3; i++){
//     arr.push([]);
//     for (let j = 0;j <= 6; j++){
//         arr[i].push(j)
//     }
// }
// console.table(arr); //to show the data in tabular form

// Step 1: Create an empty array to hold the table data
// const myTable = [];

// // Step 2: Set variable values for number of rows and columns
// const numRows = 5;    // Change this to the desired number of rows
// const numColumns = 7; // Change this to the desired number of columns

// // Step 3: Initialize a counter variable
// let counter = 1; // Starting value for the cells

// // Step 4: Create a loop to construct each row of the table
// for (let row = 0; row < numRows; row++) {
//   const tempRow = []; // Create an array for each row

//   // Step 5: Nest a second loop to count the columns within each row
//   for (let col = 0; col < numColumns; col++) {
//     // Step 6: Increment the main counter for each cell
//     // Step 7: Push counter values to the temporary array
//     tempRow.push(counter);
//     counter++; // Increment the counter for the next cell
//   }

//   // Step 8: Push the temporary row array to the main table
//   myTable.push(tempRow);
// }

// // Step 9: Output the table using console.table()
// console.table(myTable);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//     names[i] = "Hello " + names[i]
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let variable of names){
// console.log(variable);
// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     };
// for (let prop in car){
// console.log(car[prop]); // for printing values
// console.log(prop); // for printing keys

// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     };

// // let arrKeys = Object.keys(car);
// // console.log(arrKeys);
// // for(let key of Object.keys(car)) {
// //     console.log(key);
// //     }

// // let arrValues = Object.values(car);
// // console.log(arrValues);
// // let arrKeys = Object.keys(car);
// // for(let i = 0; i < arrKeys.length; i++) {
// // console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// // }

// let arrEntries = Object.entries(car);
// console.log(arrEntries);

// for (const [key, value] of Object.entries(car)) {
//     console.log(key, ":", value);
//     }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//     break;
//     }
// }

// let cars = [
//   {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//   },
//   {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//   },
//   {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//   },
//   {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//   },
// ];

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].year >= 2020) {
//     if (cars[i].color === "black") {
//       console.log("I have found my new car:", cars[i]);
//       break;
//     }
//   }
// }

let i = 1;
while (i < 50) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
