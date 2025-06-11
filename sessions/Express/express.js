import express, { json } from 'express';
import fs from "fs"


const PORT =3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.end('Hello from Express Server');
});


app.post("/about",(req,res)=>{
  fs.writeFile("data.json",JSON.stringify(req.body),(err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("data saved")
    }
  });
});

app.put("/review",(req,res)=>{
     fs.writeFile("data.json",JSON.stringify(req.body),(err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("data saved")
    }
  });
});

app.delete("/contact",(req,res)=>{
   fs.unlink("data.json",(err)=>{
    if (err){
        console.log(err);
    } else {
        console.log("data removed")
    }
  });
});

app.listen(PORT, ()=>{
    console.log(PORT)
})





// app.get("/about",(req,res)=>{
//     fs.readFile("../../sessions/html-css/day7/grid.html", "utf-8", (err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.write(data)
//         }
//     })
// });