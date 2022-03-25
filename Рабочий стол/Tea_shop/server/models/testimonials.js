const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    discription: String,
    register: { type: String, default: '' },
    active: { type: Boolean, default: false }
});

module.exports = model('testimonials', schema);
