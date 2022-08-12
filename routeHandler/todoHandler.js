const express = require('express');

const router = express.Router();

// Get all todos

router.get('/',async(req,res)=>{

});

// Get single todos
router.get('/:id', async(req,res)=>{

});

//post a single todo 
router.post('/',async(req,res)=>{

});
//post multiple todo
router.post('/all',async(req,res)=>{

});

// update a todo
router.put('/:id',async(req,res)=>{

});

// delete a todo

router.delete('/:id', async(req,res)=>{

});

module.exports = router;