var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dogSchema = new mongoose.Schema({
    URL: String,
    name: String,
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true
});


module.exports = mongoose.model('Dog', dogSchema);