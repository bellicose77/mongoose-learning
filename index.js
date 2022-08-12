const express = require('express');

const app = express();
const port = 5000;
app.use(express.json());

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/TODO',{
    useNewUrlParser:true,useUnifiedTopology:true
})
.then(()=>{console.log("database connection")})
.catch((err)=>{console.log(err)})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })




