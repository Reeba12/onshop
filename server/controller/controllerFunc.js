const express = require('express');
const mongoose = require('mongoose');
const DbModel = require('../model/UserDb');
const { route } = require('../routes/routers');
const bcrypt = require('bcrypt');
// const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken')
const app = express();






const SignUp = async (req, res) => {
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
    const { name, cnic, email, password: plaintextpassword, cpassword, role } = req.body
    const password = await bcrypt.hash(req.body.password, 10)
    // console.log(await bcrypt.hash(req.body.password, 10))
    // console.log(name, cnic, email, password, cpassword, role)
    try {
        const userData = new DbModel({
            Name: name,
            Email: email,
            CNIC: cnic,
            Role: role,
            Password: password,


        })

        await userData.save()
        res.send("inserted")
        console.log("user added", userData)
    }
    catch (err) {
        console.log(err)
    }

}
const Login = async (req, res) => {
    // try {
        const { email, password, cnic } = req.body
        if (!email || !password || !cnic) {
            return res.json({ status: "notok", error: "plz enter " })
        }
        const userLogin = await DbModel.findOne({ CNIC: cnic })
        // console.log(userLogin)
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.Password)
                // console.log(result)
         
            
            const token = await userLogin.getAuthToken()
            // console.log(token)
            // res.cookie("jwtoken",token,{
            //     expires:new Date(Date.now()+25892000000),
            //     httpOnly:true
            // })
            if (!isMatch) {
                return res.json({ status: "400", error: "invalid" })
            } else {
                // res.sendFile(__dirname + "/")
                // const Path=path.join(__dirname,"../")
                // conaole.log(Path)
                // console.log(__dirname,"../")
                // console.log(userLogin)
                // return userLogin
                // res.send(token)
                res.send(userLogin)
            //     res.json({
            //         _id: userLogin._id,
            //         CNIC: userLogin.CNIC,
            //         Name: userLogin.Name,
            //         Role: userLogin.Role,
            //         Email: userLogin.Email,
                   
            // })
        } }else {
            return res.json({ error: "invalid crediential" })
        }
    // }
    // catch (err) {
    //     return res.json({ error: "went wrong" })
    // }


}

// const Dashboard=(req,res)=>{
// console.log(req.body)
// res.send(req.rootUser)
// }


module.exports = { SignUp, Login }