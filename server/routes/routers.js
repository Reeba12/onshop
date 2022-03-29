const express = require("express");
const DbModel = require("../model/UserDb");
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
router.get("/login", async (req, res) => {
  // try {
  const { email, password, cnic } = req.body;
  if (!email || !password || !cnic) {
    return res.json({ status: "notok", error: "plz enter " });
  }
  const userLogin = await DbModel.findOne({ CNIC: cnic });
  // console.log(userLogin)
  if (userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.Password);
    // console.log(result)

    const token = await userLogin.getAuthToken();
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
      res.send(token);
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
});
// router.get('/dashboard',authenticate(["storeCreater"]),UserFunction.Login)

module.exports = router;
