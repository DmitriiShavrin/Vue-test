const { Router } = require('express');
const Users = require('../models/users');
const router = Router();

// Login
router.post('/login', async (req, res) => {
    const Check = await Users.findOne({ email: req.body.email, pass: req.body.pass });
    if (Check != null) {
        const hash = Date.now();
        await Users.updateOne({ email: Check.email }, { login_date: new Date().toLocaleString(), token: hash });
        res.send({ status: 'ok', ...Check._doc, token: hash });
    } else {
        res.send({ status: 'err' });
    }
});

router.post('/check', async (req, res) => {
    const Check = await Users.findOne({ token: req.body.token });
    if (Check != null) {
        res.send({ status: 'ok', ...Check._doc })
    } else {
        res.send({ status: 'err' })
    }
})

module.exports = router;