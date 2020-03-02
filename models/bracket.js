var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var bracketSchema = new mongoose.Schema({
    name: {type: String, default: "The Woofing Competition"}
}, {
    timestamps: true
});

module.exports = mongoose.model('Bracket', bracketSchema);