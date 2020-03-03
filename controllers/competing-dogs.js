const User = require('../models/user');
const CompetingDog = require('../models/competing-dog')
const Bracket = require('../models/bracket');


function index(req, res, next) {
    console.log(req.params.userId);
    Bracket.find({}, function(err, bracket){
        User.find({}, function(err, user){
            bracket.save(function(err, bracket){
                const competingDog = new CompetingDog({
                    bracket: bracket._id,
                    user: req.params.userId
                });
                console.log(competingDog);
                res.render('bracket/index', {
                   user,
                   bracket
                }); 
            });
        });
    });
}



module.exports = {
    index
}