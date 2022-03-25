const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const usersRoute = require('./routes/usersRoute');
const itemsRoute = require('./routes/itemsRoute');
const categoryRoute = require('./routes/categoryRoute');
const historyRoute = require('./routes/historyRoute');
const contactsRoute = require('./routes/contactsRoute');
const cartRoute = require('./routes/cartRoute');
const testimonialsRoute = require('./routes/testimonialsRoute');
const calendareRoute = require('./routes/calendarRoute');

const App = express();

App.use(cors());
App.use(express.json());
App.use(fileUpload());
App.use('/img', express.static('img'))

App.use('/users', usersRoute);
App.use('/items', itemsRoute);
App.use('/category', categoryRoute);
App.use('/history', historyRoute);
App.use('/contacts', contactsRoute);
App.use('/cart', cartRoute);
App.use('/testimonials', testimonialsRoute);
App.use('/calendar', calendareRoute)

mongoose.connect('mongodb://localhost/tea', () => {
    console.log('DB connected')
});

App.get('/', (req, res) => {
    res.send('ok')
});


App.listen(5000, 'localhost', () => {
    console.log('Server running ....')
});