const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    date: String, 
    items: Array,
    total: Number
});

module.exports = model('cart', schema);
