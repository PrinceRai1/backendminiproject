const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testapp1")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('user', userSchema);