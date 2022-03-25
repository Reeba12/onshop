
const express = require('express');
// const mongoose = require('mongoose');
const UserFunction = require('../controller/controllerFunc')
const router = express.Router();
const app = express();

router.get('/signup', UserFunction)

module.exports=router