const express = require("express");
const mongoose = require("mongoose");
const DbModel = require("../model/UserDb");
const ProductDB = require("../model/ProductDb");
const { route } = require("../routes/routers");
const bcrypt = require("bcrypt");
// const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require("jsonwebtoken");
const app = express();

const ProductADD=async(req,res)=>{
    const {desc,name,price,date,category,image,cnic}=req.body
    // const image=req.body.file
    console.log(req?.body.image,"LINE 15 ==>")
    var success=image+"uploaded";
    res.send({title:"uploaded",success:success})
    try {
        const ProductData = new ProductDB({
            productName:name,
            productDesc:desc,
            productPrice:price,
            productImg:image,
            productcategory:category,
            date:date,
            user:cnic
        })

        await ProductData.save()
        res.send("inserted")
        console.log("user added", ProductData)
    }
    catch (err) {
        console.log(err)
    }

}
// const products = async (req, res) => {
//   const { desc, name, price, date, category, image, cnic } = req.body;
  // const image=req.body.file
  // console.log(req?.body.image,"LINE 15 ==>")
  // var success=image+"uploaded";
  // res.send({title:"uploaded",success:success})
//   console.log(req.body);
//   try {
//     const userfind = await DbModel.find(
//       { CNIC: cnic },
//       async (err, result) => {
//           result.products.productName = name,
//           result.products.productDesc = desc,
//           result.products.productPrice = price,
//           result.products.productImg = image,
//           result.products.productcategory = category,
//           result.products.date = date
//         result.save()
//       }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

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
  const {
    name,
    cnic,
    email,
    password: plaintextpassword,
    cpassword,
    role,
  } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);

  try {
    const userData = new DbModel({
      Name: name,
      Email: email,
      CNIC: cnic,
      Role: role,
      Password: password,
    });

    await userData.save();
    res.send("inserted");
    console.log("user added", userData);
  } catch (err) {
    console.log(err);
  }
};
const Login = async (req, res) => {
  // try {
  const { email, password, cnic } = req.body;
  if (!email || !password || !cnic) {
    return res.json({ status: "notok", error: "plz enter " });
  }
  console.log(req.body);
  const userLogin = await DbModel.findOne({ CNIC: cnic });
  // console.log(userLogin)
  if (userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.Password);
    // console.log(result)

    // const token = await userLogin.getAuthToken();
    // console.log(token)
    // res.cookie("jwtoken",token,{
    //     expires:new Date(Date.now()+25892000000),
    //     httpOnly:true
    // })
    if (!isMatch) {
      return res.json({ status: "400", error: "invalid" });
    } else {
      // res.sendFile(__dirname + "/")
      // const Path=path.join(__dirname,"../")
      // conaole.log(Path)
      // console.log(__dirname,"../")
      // console.log(userLogin)
      // return userLogin
      // res.send(token)
      res.send(userLogin);
      //     res.json({
      //         _id: userLogin._id,
      //         CNIC: userLogin.CNIC,
      //         Name: userLogin.Name,
      //         Role: userLogin.Role,
      //         Email: userLogin.Email,

      // })
    }
  } else {
    return res.json({ error: "invalid crediential" });
  }
  // }
  // catch (err) {
  //     return res.json({ error: "went wrong" })
  // }
};

// const Dashboard=(req,res)=>{
// console.log(req.body)
// res.send(req.rootUser)
// }
const Delete=()=>async (req,res)=>{
    // dataModel.deleteOne({$where :Id})
    const id=req.params.id
    // res.send(id)
    // res.send(dataModel)
    // dataModel.find({$where {_id:"6238149e2f9e97ac64fc4ade"}})
    await dataModel.findByIdAndDelete(id);
    res.send("deleted")
}
const select=async (req,res)=>{
const id=req.params.id
const object = await ProductDB.findOne({ CNIC: id });
if (!object) {
    res.status(500).json({ success: false });
  }
  res.send(object);
  console.log(object);
}
const getProduct = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const obj = await ProductDB.findOne({ _id: id });
  // ,(err,result)=>{
  // // console.log(result)
  // if(err){
  //     res.send(err)
  // }
  // res.send(result)
  // console.log(result)
  // }
  if (!obj) {
    res.status(500).json({ success: false });
  }
  res.send(obj);

  
};

module.exports = { SignUp, Login, ProductADD,getProduct,select ,Delete};
