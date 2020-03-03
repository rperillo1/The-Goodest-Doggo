const User = require('../models/user');
const CompetingDog = require('../models/competing-dog')
const Bracket = require('../models/bracket');



function index(req, res, next) {
    Bracket.find({}, function(err, bracket){
        User.find({}, function(err, user){
                res.render('bracket/index', {
                   user,
                   bracket
                }); 
            });
        });
}


function show(req, res, next) {
    User.find({}, function(err, user){
        const competingDog = new CompetingDog({
            bracket: req.params.bracketId,
            user: req.user._id
        });
        console.log('competing dog model', competingDog);
        res.render('bracket/show', {
            user,
            bracketId: req.params.bracketId
        }); 
    });
}



module.exports = {
    index,
    show
}