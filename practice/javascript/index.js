// let student ={
//     name :"Raushan-Kumar",
//     Age :23,
//     isMarried :false,
//     Location :"Bhagalpur"
// };
// console.log(student);

// let a =5;
// let b =2;
// let c = a / b;
// console.log (c);
// this is module (used for printing the remainder)
// console.log(a%b);
// this is exponentiation operator(used for raising to the power)
// console.log(a**b);

//urinary operater
// let a = 5;
// let b = 6;
// ++b;
// console.log(b);


// console.log(b);
// // increment
// b++;
// console.log(b);
// // decrement
// b--;
// console.log(b);

//assignment operators

// let a = 6;
// let b = 9;
// a%=b;
// console.log(a);

// comparison operators 

// let a = 5;
// let b = 5;
// for equal to (==)
// console.log(a==b);

// for not equal to (!=)
// console.log(a!=b);

//logical operators

// let cond1 = a > b;
// let cond2 = a ===b;
// console.log(cond1 || cond2);

// let age = 18;

// if(age>=18){
//     console.log("you are eligible for vote");
// }
// else {
//     console.log("you are not eligible for vote");
// }

// let mode ="light";
// let color;
// if (mode === "dark"){
//     color = "black";
// }

// if (mode === "light"){
//     color = "white";
// }

// else {
//     color ="white"
// }
// console.log(color);

// let a =8;

// if (a%2 ===0 ){
//     console.log(a, "is even");
// }
// else{
//     console.log(a,"is odd");
// }

// if else if condition 

// let age = 50;
// if (age <=18){
//     console.log("junior");
// }
// else if (age >= 60){
//     console.log("senior");
// }
// else {
//     console.log("middle");
// }


// elseif 

// let mode = "dark";
// let color;

// if (mode === "dark"){
//     color ="black";
// }
// else if(mode === "light") {
//     color = "black";
// }
// else if (mode === "pink"){
//     color = "pink";
// }
// else{
//     color = "blue";
// }
// console.log(color);
// if (mode === "dark") {
//     console.log(mode);}

// conditional statement 

// let age = 15;

// let result = age >= 18 ? "adult":"minor";
// console.log(result);

// get users to input using prompt to check if the number is multiple of 5 or not  

// let num = prompt ("enter a number");

// if ( num % 5 === 0){
//     console.log(num, "is multiple of 5");
// }
// else {
//     console.log(num,"is not the multiple of 5");
// }


// let marks = prompt("enter yoyr marks (0-100");
// let grade;

// if (marks>=90 && marks <=100 ){
//  grade ="A";
// }
// else if (marks >= 60 && marks<=89){
//     grade ="B";
// }
// else if (marks >=40 && marks <=59){
//     grade = "C";
// }
// else {
//     grade = "Fail";
// }
// console.log ("According to your marks, your grade is :", grade );



// loops = loops are used to execute a piece of code again and again. 

// for loop 
// for (let i = 1; i<=500; i++){
// console.log ("Raushan-Kumar");
// }
// console.log ("loop has ended");

// calculate sum of 1 to n

// let sum = 0;
// let n =20
// for (let i = 1; i<=n; i++){
//     sum = sum + i;

// }
// console.log("sum = ", sum);
// console.log("loop has ended");


// for (let i =1; i<=12; i++){
//     console.log("i= ", i);
// }
// for (let i=1; i<=50; i++){
//     console.log("i = ", i);
// }

// while loop 

// let i=5;
// while(i<=10){
//     console.log ("i=", i);
//     i++;
// }

// do while loop


// let i = 5;

// do {
//     console.log("i=", i);
//     i++;
// } while(i<=10);

// for of loop 

// let str ="RaushanKumar";
// let size =0;

// for (let i of str)
// {
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =", size);

// for in loop 

// let student ={
//     name :"Raushan",
//     age:23,
//     city:"bhagalpur",
//     isMarried:"false"
// };
// for (let i in student){
//     console.log()
// }

// for (let i=0; i<=100; i++ ){
//     if (i%2 === 0)
//     console.log("i = ", i)
// }

// practice


// let gamenum = 50;
// let usernum=prompt("guess the game number");

// while(usernum !=gamenum){
//     usernum=prompt("you entered the wrong number, guess again");
// }
// console.log("congratulations you entered the right number");

// let obj ={
//     item : "pen",
//     price :10,
// }
// // console.log("the price of", obj.item, "is", obj.price, "rupees");
// let output = `the cost of ${obj.item} is ${obj.price}`;
// console.log(output);

// let gameNum = 30;
// let userNum=prompt("guess the game number");

// while(userNum !=gameNum){
//     userNum=prompt("you entered the wrong number, Guess again");
// }
// console.log("congratulations, you entered the right number");

// strings

// let str ="Raushan-Kumar";

// let obj ={
//     item:"pen",
//     price:50,
// };
// let output = `the price of the ${obj.item} is ${obj.item} rupees`;
// console.log(output);
// console.log("the price of the",obj.item,"is",obj.price,"rupees");

// console.log("Raushan\tKumar");

// let str = "Raushan-kumar";
// // let newstr = str.toUpperCase();
// let newstr = str.toLowerCase();
// console.log(str);
// console.log(newstr);

// trim()

// let str ="     Raushan                     kumar        js";
// console.log(str.trim());

// slice()

// let str ="Raushan";
// console.log(str.slice(1,5));

// for adding two string in a single result (concat) 

// let str1 ="Raushan";
// let str2 ="Kumar";
// let result=str1.concat(str2);
// let result = str2 + str1 ;
// console.log(result);

// for replacement of any string str.replace 

// let str = "Raushan";
// console.log(str.replace('au','o'));


// let fullName=prompt("enter your full name without spaces");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

// arrays in js 

// let marks = ["95","82","89","84"];
// marks[2]=66;

// console.log(marks);

// let name =["rahul","raushan","prince","chotu"];
// // for (let i=0; i<name.length; i++)
// // {
// //     console.log(name[i]);
// // }

// for (let na of name){
//     console.log(na.toUpperCase());
// }

// let marks =[85,27,57,9,88,57];
// let sum =0;
// for (let val of marks){
//    sum = sum+val;
// }
// let avg = sum/marks.length;
// console.log(`average marks of the class is ${avg}`);



// let marks = [88,98,95,52,87,25];
// let sum =0;

// for (let val of marks){
// sum= sum+val;   
// }
// let avg = sum/ marks.length;
// console.log(`average of the class is ${avg}`);


// let price = [250,645,300,900,50];
// let i=0;
// for (let val of price){
//     // console.log(`price of items ${i}= ${val}`);
//     let offer=val/10;
//     price[i]=price[i]-offer;
//     console.log(`price of item after offer is ${price[i]}`);
//     i++;
// }
// console.log(price);

// let fruits = ['apple','litchi','mangoes','banana'];
// console.log(fruits);
// fruits.push('carrot','onion','potatoes');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);
// let marvels = ['ironman','hulk','wanda','thor'];
// let dc =['batman','superman'];
// let heroes=marvels.concat(dc);
// console.log(heroes);

// let marvels = ['ironman','hulk','wanda','thor','raushan','prince'];
// // console.log(marvels.slice(1,2));

// marvels.splice(1,2,'raman');


// let arr =['bloomberg','microsoft','uber','google','ibm','netflix'];
// // arr.splice(0,1);
// // arr.splice(2,1,'ola');
// arr.push('amazon');
// console.log(arr);


// functions 

// function raushan (){
//     console.log("welcome to my function");
//     console.log("this is my first function");
// }
// raushan();

// function raushan(msg){
//     console.log(msg);
// }
// raushan("hello");

// function sum (x,y){
//     s = x+y;
//     return s ;

// }
// let val = sum (5,9);
// console.log(val);

// function sum (x,y){
//     s = x+y;
//     return s;
// }
// let val = sum(5,6);
// console.log(val);

// arrow function 

// let sum =(n)=>{
// console.log(n);
// }



// function countVowels(str){
//     let count = 0;
//     for (const char of str){
//        if (char === "a" || char ==="e" || char === "i" || char ==="o" || char ==="u"){
//         count++;
//        }
//     }
//    return count;
// }

// const vowel =(str)=>{
//      let count = 0;
//     for (const char of str){
//        if (char === "a" || char ==="e" || char === "i" || char ==="o" || char ==="u"){
//         count++;
//        }
//     }
//    return count;
// };



let arr = [1,2,3,4,5,6];

arr.forEach(function printvalue(value){
    console.log(value);
});























