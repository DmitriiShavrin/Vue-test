const { Router } = require('express');
const Category = require('../models/categories');

const router = Router();

//All categories
router.get('/', async(req, res) => {
    res.send({status: 'ok', body: await Category.find()})
});

//creation of categories
router.post('/', async(req, res) => {
    const Check = await Category.findOne({title: req.body.title});
    if(!Check){
        if(await Category.create(req.body)){
            res.send({status: 'ok', body: await Category.find()});
        } 
    }
});

//Deleting of categories
router.delete('/:_id', async(req, res) => {
    await Category.deleteOne(req.params);
    res.send({status: 'ok', body: await Category.find()});
});


//Editing of categories
router.put('/:_id', async(req, res) => {
    await Category.updateOne(req.params, {...req.body });
    res.send({status: 'ok', body: await Category.find()});
});



module.exports = router;