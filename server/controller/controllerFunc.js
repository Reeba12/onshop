const express = require('express');
const mongoose = require('mongoose');
const DbModel = require('../model/UserDb');
const { route } = require('../routes/routers');
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
        const userData= new DbModel({
            Name:req.body.fname,
            Email:req.body.email,
            CNIC:req.body.cnic,
            Role:req.body.role,
            Password:req.body.password,
            cPassword:req.body.cpassword
            
        })
        try{
            
            
            await userData.save()
            res.send("inserted")
            
        }
        catch(err){
            console.log(err)
        }
  

}
const Login=async(req,res)=>{
    const id=req.params.id
    await DbModel.find({_id:id})
}



module.exports={SignUp}