const User = require('../models/user');
const CompetingDog = require('../models/competing-dog')
const Bracket = require('../models/bracket');

function index(req, res, next) {
    const competingDog = new CompetingDog(bracket);
    console.log('newly created competing dog', competingDog);
    User.find({}, function(err, users){
        res.render('bracket/index', {
            users
        });  
    });
}



module.exports = {
    index
}