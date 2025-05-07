// let person ={
//     name: "Raushan",
//     age: 22,    
//     salary: 1000,
//     isMarried: false,
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.salary);
// console.log(person.isMarried);
// console.log(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let response ={
//     status:200,
//     header:"Raushan",
//     ip:"127.0.0.1",
//     token:"123456789",
//     data:{
//         name:"Raushan",
//         age:22,
//         salary:1000,
//         isMarried:false,
//     },
// }


// let response2 = {
//       status: 200,
//       header: "vikas",
//       ip: "127.0.0.1",
//       token: 1223455,
//       data: {
//         name: "vikas",
//         age: 24,
//         isMarried: false,
//         salary: 2123344,
//       },
//       data2: {
//         name: {
//           first: "vikas",
//           last: "thakur",
//         },
//         age: 24,
//         isMarried: false,
//         salary: 2123344,
//       },
//     };



// adding two arrays 

// let arr1 =[1,2,3,4,5];
// let arr2 =[6,7,8,9,10];

//  spread ... 

// // let result =[...arr1];
// let result=[...arr1,...arr2];
// console.log(result);

// rest 

// const arr3 =["apple", "banana", "orange", "grape", "kiwi"];
// const[first, second, ...others] = arr3;

// console.log(first);
// console.log(second);
// console.log(others);


// const arr3=["raushan", "vikas", "saurabh", "sachin", "saurabh"];
// const[first, second, third, ...others] = arr3;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(others);

// let arr5=[1,2,3,4,5,6,7,8,9,10];
// let arr6=[11,12,13,14,15,16,17,18,19,20];

// let result=[...arr5, ...arr6];
// console.log(result);


// let arr7=[1,2,3,4,5,6,7,8,9,10];
// let arr8=[11,12,13,14,15,16,17,18,19,20];
// let arr9=[21,22,23,24,25,26,27,28,29,30];
// let result=[...arr7, ...arr8, ...arr9];
// console.log(result);

let obj1 = {
    name : "Raushan",
    age : 22,
    salary : 1000,
    address : {
        city : "Patna",
        state : "Bihar",
        country : "India",
    }
};

// normal copy of object 

let obj2 = {...obj1};
obj2.name = "Raushan Kumar";
obj2.age = 23;
obj2.salary = 2000;
console.log(obj1);
console.log(obj2);

// shallow copy of object 

// let obj2 = {...obj1};
// obj2.name = "Raushan Kumar";
// obj2.age = 25;
// obj2.salary = 2000;
// obj2.address.city = "Delhi";
// console.log(obj1);
// console.log(obj2);


// let details ={
//     name : "Raushan kumar",
//     age : 22,
//     salary : 1000,
//     ismarried : false,
//     address : {
//         city : "Patna",
//         state : "Bihar",
//         country : "India",
//     },
// }

// // object to string 

// let result = JSON.stringify(details);
// console.log(result);
// console.log (typeof result);

// string to object 

// let result2 = JSON.parse(result);
// console.log(result2);
// console.log(typeof (result2));


// deep copy 

// let person1 ={
//     name : "Raushan",
//     age : 22,
//     salary : 1000,
//     ismarried : false,
//     address : {
//         city : "Patna",
//         state : "Bihar",
//         country : "India",
//     },
// };
// let persson2 = structuredClone(person1);
// // let persson2 = JSON.parse(JSON.stringify(person1));
// persson2.name = "Raushan Kumar";
// persson2.address.city = "Delhi";
// console.log(person1);
// console.log(persson2);


let response1 = {
      status: 200,
      header: "vikas",
      ip: "127.0.0.1",
      token: 1223455,
      data: {
        name: "vikas",
        age: 24,
        isMarried: false,
        salary: 2123344,
      },
      data2: {
        name: {
          first: "vikas",
          last: "thakur",
        },
        age: 24,
        isMarried: false,
        salary: 2123344,
      },
    };
   let response2 = structuredClone(response1);
   response2.data2.name.first = "Raushan";
    response2.data2.name.last = "Kumar";
   console.log(response1);