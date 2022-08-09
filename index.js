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

const firstBlog = new Blog({
    name:"Nodejs",
    ctype : "Learning fast",
    videos : 40,
    author: "tpr na",
    active: true,

});
const secondBlog = new Blog({
    name:"Reacjs",
    ctype : "frontend",
    videos : 40,
    author: "tpr na",
    active: true,

});
const thirdBlog = new Blog({
    name:"Expressjs",
    ctype : "Learning fast",
    videos : 40,
    author: "tpr na",
    active: true,

});
const fourthBlog = new Blog({
    name:"Baljs",
    ctype : "kisu nai er moddeh",
    videos : 40,
    author: "tpr na",
    active: true,

});
Blog.insertMany([secondBlog, thirdBlog,fourthBlog ])

const readDocu = () =>{
   const result = await Blog.find();
}
readDocu();

