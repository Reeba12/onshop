// const express = require('express');
const jwt=require('jsonwebtoken')
const mongoose = require('mongoose');
// const app = express();

const Product=mongoose.Schema( 
    {
    productName:{
        type:String,
        required: true
    },
    productDesc:{
        type:String,
        required: true
    },
    productImg:{
        data: Buffer,
        type: String
    },
    productPrice:{
        type:String,
        required: true
    },
    productcategory:{
        type:String
    },
    date:{
        type:String
        
        
    },
    

})

// AddUsers.methods.getAuthToken=async function(){
//     try{
//         const token= jwt.sign({id:this._id},'screte')
//         this.tokens=this.tokens.concat({token:token})
//         await this.save()
//         return token
//     }catch(err){
//         console.log(err)
//     }
// }
const ProductDB=mongoose.model('product',Product);
// const Products=mongoose.model('User',AddProducts);
module.exports=ProductDB;
