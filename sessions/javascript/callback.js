// function greet(name , cb){
//     console.log("Hello " + name);
//     cb();
// }
// function sayhi() {
//     console.log("Good Morning");
// }
// greet("Raushan Kumar", sayhi);


// task-1 
// recepie to make sandwichgui
// 1. bake bread
// 2. stuffing
// 3. grilled
// 4. serve
// 5. eat

function step1(callback){
    setTimeout(()=>{
        console.log("bread is baked")
        callback();
    }, 2000)
}
function step2(callback){
    setTimeout(()=>{
        console.log("stuffing is done")
        callback();
    },2000)
}
function step3(callback){
    setTimeout(()=>{
        console.log("grilled is done")
        callback();
    },2000)
}
function step4(callback){
    setTimeout(()=>{
        console.log("serve is done")
        callback();
    },2000)
}


step1( ()=>{
    step2( ()=>{
        step3( ()=>{
            step4( ()=>{
                console.log("sandwich is ready to eat")
            })
        })
    })
});
// setTimeout(()=>{
//     console.log("hiii");
// },  2000
// )


