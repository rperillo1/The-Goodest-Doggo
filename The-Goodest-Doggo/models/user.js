var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
    URL: String,
    name: String,
}, {
    timestamps: true
});

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  dog: [dogSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);