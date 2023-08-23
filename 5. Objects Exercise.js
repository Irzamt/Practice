// 1 - Address Object
// let address = {
//     street: 4,
//     city: "fsd",
//     zipCode: 38000
// };
// function showAddress (address){
//     for (let key in address){
//         console.log(key, address[key]);
//     }
// }
// showAddress(address);

// 2 - Factory and Constructor Function

//Factory Function
// function createAddress (street, city, zipCode){
//     return{
//         street,
//         city,
//         zipCode
//     };
// }

// let address = createAddress (4, 6, 38000);
// console.log(address);

//Constructor Function
// function Address(street, city, zipCode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// let address = new Address(4, 8, 6);
// console.log(address);

// 3 - Object Equality
// function Address(street, city, zipCode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// let address1 = new Address(4, 8, 6);
// let address2 = new Address(4, 8, 6);
// let address3 = address1;

// function areEqual (address1, address2){
//     return address1.street === address2.street &&
//         address1.street === address2.street &&
//         address1.zipCode === address2.zipCode;
// }

// function areSame (address1, address2){
//     return address1 === address2;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));

// 4 - Blog Post Obe=ject
// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         { author: 'a', body: 'b'},
//         { author: 'c', body: 'd'},
//     ],
//     isLive: true
// }
// console.log(post);

//5 - Constructor Function

// function Post(title, body, author){
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }
// let post = new Post ('a', 'b', 'c');
// console.log(post);

//6 - Price Range Objects

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];

let resturants = [
    { averagePerPerson: 5 }
]