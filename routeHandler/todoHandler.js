const express = require('express');
const  mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchemas')

const router = express.Router();

const Todo = new mongoose.model('todo',todoSchema)

// Get all todos

router.get('/',async(req,res)=>{

});

// Get single todos
router.get('/:id', async(req,res)=>{

});

//post a single todo 
router.post('/',async(req,res)=>{
    const newtodo = new Todo(req.body);
    console.log(newtodo);
    await newtodo.save((err)=>{
        if(err){
            res.status(500).json({
                error: "ther is a server side error"
            })
        }
        else{
            res.status(200).json({
                message: "Data added successfully"
            })
        }
    })

});
//post multiple todo
router.post('/all',async(req,res)=>{
    await Todo.insertMany(req.body,(err)=>{

    })

});

// update a todo
router.put('/:id',async(req,res)=>{

});

// delete a todo

router.delete('/:id', async(req,res)=>{

});

module.exports = router;