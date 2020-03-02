var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var bracketSchema = new mongoose.Schema({
    name: String,
    dogs: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Bracket', bracketSchema);