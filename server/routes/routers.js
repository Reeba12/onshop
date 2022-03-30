const express = require("express");
const DbModel = require("../model/UserDb");
const ProductDB = require("../model/ProductDb")
const UserFunction = require("../controller/controllerFunc");
const authenticate = require("../middleware/auth");
// const  expressValidator = require('express-validator');
const { body, validationResult } = require("express-validator");

const router = express.Router();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

router.post("/signup", UserFunction.SignUp);

router.post("/login", UserFunction.Login);
router.post('/addproduct',UserFunction.ProductADD)
// router.get('/',(req,res)=>{
//     console.log(req)
// const id=req.body._id
// res.send(req.body)
// DbModel.findOne({},(err,result)=>{
//     if(err){
//         res.send(err)
//     }
//     res.send(result)
// }
// )
// router.get("/", (req,res)=>{
//     // res.send("data")
//     // console.log(req.body)
//     DbModel.find({},(err,result)=>{
//         if(err){
//             res.send(err)
//         }
//         res.send(result)
//     })
// });
router.get('/login',async (req,res)=>{
  console.log(req.session)
})
// router.get('/dashboard',authenticate(["storeCreater"]),UserFunction.Login)

module.exports = router;
