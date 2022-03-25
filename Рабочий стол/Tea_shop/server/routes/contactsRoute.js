const { Router } = require('express');
const Contacts = require('../models/contacts');

const router = Router();

// All items
router.get('/', async(req, res)=>{
    res.send({status: 'ok', body: await Contacts.find()})
});

// Create item
router.post('/', async(req, res)=>{
    if (await Contacts.create({...req.body})) {
        res.send({ status: 'ok' })
    } else {
        res.send({ status: 'error' })
    }
});

//delete items
router.delete('/:_id', async(req, res)=>{
    await Contacts.deleteOne(req.params)
    res.send({status: 'ok', body: await Contacts.find()})
});

// update items
router.put('/:_id', async(req, res) => {
    await Contacts.updateOne(req.params, {...req.body});
    res.send({status: 'ok', body: await Contacts.find()});
});

// Activate
router.put('/activate/:_id', async(req, res) => {
    await Contacts.updateMany({active: false})
    await Contacts.updateOne(req.params, {active: true})
    res.send({status: 'ok', body: await Contacts.find()})
})

// get current banner
router.get('/current', async(req, res) => {
    res.send({status: 'ok', body: await Contacts.findOne({active: true})})
})


module.exports = router;