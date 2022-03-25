const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    title: String,
    url: String
});

module.exports = model('categories', schema);