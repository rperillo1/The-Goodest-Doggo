var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var competingDogSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User' },
    bracket: {type: Schema.Types.ObjectId, ref: 'Bracket'},
    votes: {type: Number, default: 0}
}, {
  timestamps: true
});

module.exports = mongoose.model('CompetingDog', competingDogSchema);