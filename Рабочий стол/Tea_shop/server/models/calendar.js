const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    date: String
});

module.exports = model('calendar', schema);
