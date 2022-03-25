const { Router } = require('express');
const History = require('../models/history');
const path = require('path');

const router = Router();


// All items
router.get('/', async(req, res)=>{
    res.send({status: 'ok', body: await History.find()})
});

// Create item
router.post('/', async(req, res)=>{
    let filename = '';
    if (req.files?.photo) {
        filename = Date.now() + path.extname(req.files.photo.name);
        req.files.photo.mv('img/' + filename)
    }
    if (await History.create({...req.body, photo: filename })) {
        res.send({ status: 'ok' })
    } else {
        res.send({ status: 'error' })
    }
});


//delete items
router.delete('/:_id', async(req, res)=>{
    await History.deleteOne(req.params)
    res.send({status: 'ok', body: await History.find()})
});

// update items
router.put('/:_id', async(req, res) => {
    let filename = '';
    if (req.files?.photo) {
        filename = Date.now() + path.extname(req.files.photo.name);
        req.files.photo.mv('img/' + filename);
    }
    await History.updateOne(req.params, {...req.body, photo: filename ? filename : req.body.photo });
    res.send({status: 'ok', body: await History.find()});
});

// Activate
router.put('/activate/:_id', async(req, res) => {
    await History.updateMany({active: false})
    await History.updateOne(req.params, {active: true})
    res.send({status: 'ok', body: await History.find()})
})

// get current banner
router.get('/current', async(req, res) => {
    res.send({status: 'ok', body: await History.findOne({active: true})})
})

module.exports = router;