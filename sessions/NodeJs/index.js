// import figlet from "figlet"


// figlet("hello Raushan", function(err,data){
//     if (err){
//         console.log("Something went wrong");
//         console.log(err);
//         return;
//     }
//     console.log(data)

// });



import http from "http";
import fs from "fs";

const PORT = 3001;
const server = http.createServer((req,res)=>{
    if (req.url =="/"){
         res.end("Hello from Server");
    }
   if (req.url == "/about"){
    fs.writeFile("demo.txt", "This is new Output file updated", "utf-8", (err,data)=>{
        if(err) {
            console.log(err)
        return;
        }
    });
    fs.readFile("demo.txt", "utf-8", (err,data)=>{
        if (err) {
            console.log(err);
        }
        else {
            res.end(data);
        }

   })
    // console.log(req.url, req.method, req.body, req.statusCode);
    }
});

server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);

});

// console.log("Hello from NodeJs Server");
