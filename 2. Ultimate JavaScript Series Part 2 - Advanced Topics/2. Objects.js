// 2 - Object Literals
/*********************************************************************************************************** */
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();
/*********************************************************************************************************** */

// 3 - Factories
/*********************************************************************************************************** */
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     }
//   };
// }

// const circle = createCircle(1);
// console.log(circle);
/*********************************************************************************************************** */

// 4 - Constructor Functions
/*********************************************************************************************************** */
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);
console.log(another);