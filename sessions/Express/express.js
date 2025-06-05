import express from 'express';
import fs from "fs"


const PORT =3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express Server');
});

app.get("/about",(req,res)=>{
    fs.readFile("../../sessions/html-css/day7/grid.html", "utf-8", (err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.write(data)
        }
    })
});

app.listen(PORT, ()=>{
    console.log(PORT)
})
