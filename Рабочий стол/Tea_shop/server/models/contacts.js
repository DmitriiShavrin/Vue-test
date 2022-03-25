const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    email: String,
    phone: String,
    active: { type: Boolean, default: false }
});

module.exports = model('contacts', schema);