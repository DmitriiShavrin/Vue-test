const { Router } = require('express');
const Testimonials = require('../models/testimonials');

const router = Router();

// All items
router.get('/', async(req, res)=>{
    res.send({status: 'ok', body: await Testimonials.find()})
});

// Create item
router.post('/', async(req, res)=>{
    if (await Testimonials.create({...req.body})) {
        res.send({ status: 'ok' })
    } else {
        res.send({ status: 'error' })
    }
});
//delete items
router.delete('/:_id', async(req, res)=>{
    await Testimonials.deleteOne(req.params)
    res.send({status: 'ok', body: await Testimonials.find()})
});

// update items
router.put('/:_id', async(req, res) => {
    await Testimonials.updateOne(req.params, {...req.body});
    res.send({status: 'ok', body: await Testimonials.find()});
});

// Activate
router.put('/activate/:_id', async(req, res) => {
    await Testimonials.updateOne(req.params, {active: true})
    res.send({status: 'ok', body: await Testimonials.find()})
})

// DIS Activate
router.put('/dis_activate/:_id', async(req, res) => {
    await Testimonials.updateOne(req.params, {active: false})
    res.send({status: 'ok', body: await Testimonials.find()})
})

// get current banner
router.get('/current', async(req, res) => {
    res.send({status: 'ok', body: await Testimonials.find({active: true})})
})

module.exports = router;