const mongoose = require('mongoose');

const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/firstDB',{
    useNewUrlParser:true,useUnifiedTopology:true
})
.then(()=>{console.log("database connection")})
.catch((err)=>{console.log(err)})

const blogSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    ctype : String,
    videos : Number,
    author: String,
    active: Boolean,


})