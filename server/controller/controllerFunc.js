const express = require('express');
const mongoose = require('mongoose');
const app = express();

const SignUp= (req,res)=>{
    res.json({message: "POST new tea"}); 
    console.log(req.body)

}



module.exports=SignUp