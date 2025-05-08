// console.log("Array methods");
// // Array methods
// const numbers = [1, 2, 3, 4, 5];
// const number1= new Array(1, 2, 3, 4, 5);
// console.log(numbers, number1);

// function A(){
//     console.log("Raushan");
// }
// A(); 

// global scope 
let a=5;
// function scope 
function A () {
    let b=10;
    console.log(b);
    console.log(a);
 {
    // block scope 
    let c=20;
    console.log(a);
    console.log(b);
    console.log(c);
 }

}
A();    



