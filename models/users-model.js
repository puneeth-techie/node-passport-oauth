const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    googleId: String
});

const Users = mongoose.model('Users', usersSchema);

exports.Users = Users;