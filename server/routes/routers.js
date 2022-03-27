
const express = require('express');
// const mongoose = require('mongoose');
const UserFunction = require('../controller/controllerFunc')
// const  expressValidator = require('express-validator');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())


router.post('/signup', UserFunction.SignUp)


router.post('/login',UserFunction.Login)

module.exports=router