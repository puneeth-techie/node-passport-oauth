const config = require('config');
const mongoose = require('mongoose');


module.exports = function (){
    const url = config.get('db');
    mongoose.connect(url, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true 
    })
    .then(() => console.log('Connected to database...'))
    .catch((err => console.log('Could not connect to database')));
}