
const router = require("express").Router();
const user = require('../Modules/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv/config');



router.post('/signup',async(req,res)=>{

   
    try{
        const {username , useremail, userpassword}= req.body; 
        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        console.log(req.body);
    const hashedPassword = await bcrypt.hash(userpassword,salt);
        
    const user_details = new user({
        name : username ,
        email:useremail,
        password:hashedPassword,
    });
    console.log("userdetails ",user_details);
    const saveUser = await user_details.save();
    
    res.status(200).send({user:saveUser});
    }
    catch(err){
        console.log(err);
    res.status(400).send({success:false , mes:err});
    }  

    });

router.get('/login',async(req,res)=>{
    try{
        const details = await user.findOne({name:req.body.username});
        console.log(details);
        console.log("request body for login:",req.body);
        const match = await bcrypt.compare(req.body.userpassword,details.password);
        const accessToken = jwt.sign(JSON.stringify(details),process.env.TOKEN_SECRET);

        if(match){
            res.send({accessToken:accessToken})
        }
        else{
            res.json({message:"invalid credentials"});
        }

    }
    catch(err){
        console.log("error-login",err);
        res.status(400).send({success:false , mes:{err}});
    }
})

module.exports=router;

