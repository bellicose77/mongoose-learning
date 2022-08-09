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
    date: {
        type : Date,
        default : Date.now
    }


});

const Blog = new mongoose.model('Blog',blogSchema);

// const firstBlog = new Blog({
//     name:"Nodejs",
//     ctype : "Learning fast",
//     videos : 40,
//     author: "tpr na",
//     active: true,

// });



//Blog.insertMany([secondBlog, thirdBlog,fourthBlog ])

const readDocu = async () =>{
   //const result = await Blog.find({name:'Reacjs'});
   const result = await Blog.find({name:{$in:['ReactJs','NodeJs','Expressjs']}})
   console.log(result);
}
readDocu();

