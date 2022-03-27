// const express = require('express');
const mongoose = require('mongoose');
// const app = express();

const AddUsers=mongoose.Schema( 
    {
    // Name:{
    //     type:String,
    //     required: true
    // },
    // Email:{
    //     type:String,
    //     required: true
    // },
    // CNIC:{
    //     type:Number,
    //     required: true,
    //     min:13,
    //     max:13
    // },
    // Role:{
    //     type:String,
    //     required: true
    // },
    // password:{
    //     type:String,
    //     required: true,
    //     min:6
    // },
    // cpassword:{
    //     type:String,
    //     required: true,
    //     min:6
    // },
    
    Name:String,
    Email:String,
    CNIC:Number,
    Role:String,
    Password:String,
    cPassword:String

})
// AddUsers.pre('save', async function save(next) {
//     if (!this.isModified('password')) return next();
//     try {
//     //   const salt = await bcrypt.hash(SALT_WORK_FACTOR);
//     await bcrypt.hash(password, 10, function(err, hash) {
//         // Store hash in your password DB.
//     });
//       this.password = await bcrypt.hash(this.password, 10);
//       return next();
//     } catch (err) {
//       return next(err);
//     }
//   });
  
//   schema.methods.validatePassword = async function validatePassword(data) {
//     return bcrypt.compare(data, this.password);
//   };
  
// const AddProducts=mongoose.Schema( 
//     {
//         MangerName:{

//         },
//         Email:{},
//         CNICNo:{},
//         Products:{
//             Name:String
//         }
    
// })
const Users=mongoose.model('User',AddUsers);
// const Products=mongoose.model('User',AddProducts);
module.exports=Users;
