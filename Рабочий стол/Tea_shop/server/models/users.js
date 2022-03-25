const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    name: String,
    email: String,
    pass: String,
    reg_date: String,
    login_date: { type: String, default: '' },
    token: { type: String, default: '' },
    chat: Array,
});

module.exports = model('users', schema);