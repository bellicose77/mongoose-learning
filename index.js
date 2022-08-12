const express = require('express');

const app = express();
app.use(express.json())

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/firstDB',{
    useNewUrlParser:true,useUnifiedTopology:true
})
.then(()=>{console.log("database connection")})
.catch((err)=>{console.log(err)})




