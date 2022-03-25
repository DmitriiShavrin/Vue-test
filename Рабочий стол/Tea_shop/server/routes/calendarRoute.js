const { Router } = require('express');
const Calendar = require('../models/calendar');

const router = Router();

// All items
router.get('/', async(req, res)=>{
    res.send({status: 'ok', body: await Calendar.find()})
});

// Create item
router.post('/', async(req, res)=>{
    if (await Calendar.create({...req.body})) {
        res.send({ status: 'ok' })
    } else {
        res.send({ status: 'error' })
    }
});

module.exports = router;