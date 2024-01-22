const express = require('express');
const cors = require('cors');
const app = express();
const connectMongo = require('./config/Connectmongo');


app.use(express.json());
app.get("/",(req,res)=>{
    res.end("<h1> Hello world </h1>")
});


const userRoute=require('./routes/auth');
app.use("/user",userRoute);

// created server with port 3003 ;
app.listen(3003,()=>{
    //connectMongo();
    console.log("the server on port 3003");
});
