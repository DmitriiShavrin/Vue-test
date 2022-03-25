const { Schema, model, modelNames } = require('mongoose');

const schema = new Schema({
    title: String,
    category_id: { type: String, default: 'Чай' },
    photo: String,
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
    discription: String
});

module.exports = model('items', schema);
