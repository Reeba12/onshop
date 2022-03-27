const express = require('express');
const mongoose = require('mongoose');
const DbModel = require('../model/UserDb');
const { route } = require('../routes/routers');
const bcrypt = require('bcrypt');
// const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken')
const app = express();






const SignUp= async (req,res)=>{
    // res.send(req.body)
  
    // console.log(req.body);
    // req.checkBody('password', 'Password is required.').isLength({min:1});
    // req.checkBody('password', 'Password is invalid.').isLength({min:6});
    // req.checkBody('cpassword', 'Password does not matched.').equals(req.body.password);
    // req.checkBody('fname', 'Name is required.').isLength({min:1});
    // req.checkBody('email', 'email is required.').isEmail();
    // req.checkBody('cnic', 'cnic is required.').isLength({min:13});
    // req.checkBody('role', 'role is required.').isLength({min:1});
    // const errors = req.validationErrors();
    // if (errors) {
    //     req.session.errors = errors;
    //     req.session.done = false;
    //    } else {
    //     req.session.done = true;
    const {name,cnic,email,password:plaintextpassword,cpassword,role}=req.body
    const password=await bcrypt.hash(req.body.password,10)
    console.log(await bcrypt.hash(req.body.password,10))
    console.log(name,cnic,email,password,cpassword,role)
    try{
        const userData= new DbModel({
            Name:name,
            Email:email,
            CNIC:cnic,
            Role:role,
            Password:password,
           
            
        })
                
            await userData.save()
            res.send("inserted")
        console.log("user added",userData)
    }
    catch(err){
        console.log(err)
    }
    
}
const Login=async(req,res)=>{
   
    // const cnic=req.body.cnic;
    try{
        const {email, password,cnic} = req.body
        // console.log({email, password,cnic} )
        if(!email || !password || !cnic){
            return res.json({status:"notok", error:"plz enter "})
        }
        const userLogin=await DbModel.findOne({CNIC:cnic})
        console.log(userLogin)
        if(userLogin){
            const isMatch=bcrypt.compare(password,userLogin.Password)
            if(!isMatch){
                return res.json({status:"400",error:"invalid"})
            }else{
                return res.json({status:"ok"})
            }
        }else{
            return res.json({error:"invalid crediential"})
        }
    }
    catch(err){
        return res.json({error:"went wrong"})
    }
        // const userLogin=await DbModel.findOne({CNIC:cnic},(err,result)=>{
    //         if(err){
    //             console.log(err)
    //         }
    //         else
    //         res.send(result)
    //     })
    // }
    // catch(error){
    //     console.log(error)
    // }

}




module.exports={SignUp,Login}