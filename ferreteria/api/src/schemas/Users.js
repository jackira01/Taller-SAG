const mongoose = require('mongoose');

const users = mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Users', users);
