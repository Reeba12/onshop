const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routers = require('./routes/routers')
const DbModel = require('./model/UserDb')
const cors = require('cors')
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://crud:crud@cluster0.4h3wm.mongodb.net/store?retryWrites=true&w=majority',{ useNewUrlParser : true})
CLOUDINARY_URL='cloudinary://163119271272869:EDgCojeEbx2LA78EP4Vh-Ix6BaY@dl2xnil88'

app.use(routers)
app.listen(4000,()=>console.log("App listening"))

