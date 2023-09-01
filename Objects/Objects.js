//Multi Dimensional Arrays or 3D Arrays
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// // console.log(arrOfArrays);
// let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log(arrOfArraysOfArrays);
// console.log(arrOfArraysOfArrays[1][1][2]);


/* 1. Objects in JavaScript*/
//*************************************************************************************************************************** */

// let dog = { dogName: "JavaScript",
// weight: 2.4,
// color: "brown",
// breed: "chihuahua",
// age: 3,
// burglarBiter: true
// };

// let variable = "breed";
// console.log(dog[variable]);

// -----------------------------------------------------------------------------------------------------------------
// Practice exercise 3.4
//*********************************************************************************************************

/* 1. Create a new myCar object for a car. Add some properties, including, but not
limited to, make and model, and values for a typical car or your car. Feel free
to use booleans, strings, or numbers.*/
// let myCar = {
//     make : "HOnda",
//     model: 2007,
//     color: "Black",
//     twoDoor : true
// };
// /*2. Create a variable that can hold the string value color. This variable
// containing a string value color can now be used to reference the property
// name within myCar. Then, use the variable within the square bracket notation
// to assign a new value to the color property in myCar.*/
// let variable = "color";
// myCar[variable] = "Blue";

// /*3. Use that same variable and assign a new property string value to it, such as
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase. */
// variable = "forSale";
// myCar["forSale"] = "available";

// /*4. Output make and model into the console.*/
// console.log(myCar["make"]);
// console.log(myCar.model);

// /*5. Output the value of forSale into the console. */
// console.log(myCar.forSale);

// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------

// 2. Objects in objects
//********************************************************************************************************************* */
// let company = { companyName: "Healthy Candy",
// activity: "food manufacturing",
// address: {
// street: "2nd street",
// number: "123",
// zipcode: "33116",
// city: "Miami",
// state: "Florida"
// },
// yearOfEstablishment: 2021
// };

// //To print the current values of the objets
// // console.log(company.address.city);

// //Modifying the values
// company.address.zipcode = "33117";
// company["address"]["number"] = "100";

// console.log(company);
// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------
// 3. Arrays in objects
//********************************************************************************************************************** */

// let company = {
//   companyName: "Healthy Candy",
//   activities: ["food manufacturing", "improving kids' health", "manufacturing toys",] ,
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };

// // Accessing element of array in an object
// console.log(company.activities[2]);

// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------
// 4. Objects in arrays
//********************************************************************************************************************** */

// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
//     }];

// let zipCodeNmae = addresses[1].zipcode;
// console.log(zipcode);
// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------
// 5. Objects in arrays in objects
//********************************************************************************************************************** */

// let company = {
//   companyName: "Healthy Candy",
//   activities: ["food manufacturing","improving kids' health","manufacturing toys",],
//   address: [{
//       street: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida",
//     },
//     {
//       street: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas",
//     },
//   ],
//   yearOfEstablishment: 2021,
// };

// let streetName = company.address[0].street;
// console.log(streetName);

// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------
// Practice exercise 3.5
//********************************************************************************************************************** */

/*1. Create an object named people that contains an empty array that is called friends.*/
// let people = {
//     friends : []
// };

/*2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.*/
// let firstVar = {
//     firstName: "Ali",
//     LastName: "Muazzam",
//     ID: 10
// };
// let secondVar = {
//     firstName: "Ali1",
//     LastName: "Muazzam1",
//     ID: 102
// };
// let thirdVar = {
//     firstName: "Ali2",
//     LastName: "Muazzam2",
//     ID: 103
// };

// /*3. Add the three friends to the friend array.*/
// people.friends = [firstVar, secondVar, thirdVar];

// /*4. Output it to the console. */
// console.log(people);