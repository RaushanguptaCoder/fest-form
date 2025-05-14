// function show(){
//     console.log("hiii.....");

// }
// show();

// creating a doom hell.....

const obj1 ={
    fname:" Raushan",
    city:"Bhagalpur",
    age: 22,
    status:"single",
    country:"India",
};


const step1 =(callback)=>{
    setTimeout(()=>{console.log("Hello" + obj1.fname);
callback();}, 2000);
};

const step2 =(callback)=>{
setTimeout(()=>{
    console.log("and You are from  " + obj1.city ); 
callback();
}, 2000);
};

const step3 =(callback)=>{
setTimeout(()=>{
    console.log("and your age is " + obj1.age);
callback();}, 2000);
};

const step4 =(callback)=>{
setTimeout(()=>{
    console.log("your marrital status is " + obj1.status + " ?");
callback();}, 2000);
};

const step5 =(callback)=>{
    setTimeout(()=>{
        console.log("and you are from " + obj1.country);
        callback();
    },2000);
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            step4(()=>{
               step5(()=>{
                 console.log("Completed")
               })
            })
        })
    })
})

