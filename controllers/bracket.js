const User = require('../models/user');
const CompetingDog = require('../models/competing-dog')
const Bracket = require('../models/bracket');



function increment(req, res) {
    CompetingDog.find({bracket: req.params.bracketId}, function(err, competingDogs){
        User.find({user: req.params.userId}, function(err, user){
            console.log('increment func dogs', competingDogs)
            console.log('increment func user',user)
            res.render(`bracket/showB/${req.params.bracketId}`, {
                    user,
                    competingDogs,
            }); 
        });
    });
}


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
    const competingDog = new CompetingDog({
        bracket: req.params.bracketId,
        user: req.user._id
    });
    console.log('competing dog model', competingDog);
    competingDog.save(function(err){
        if (err) res.redirect('/bracket/index');
        res.redirect(`/bracket/index`); 
    });
}


function showBracket(req, res){
    CompetingDog.find({bracket: req.params.bracketId}, function(err, competingDogs){
        // console.log('competingdogs.user', competingDogs)
            console.log('current bracket dogs', competingDogs);
            User.find({}, function(err, user){
                console.log(user);
                res.render('bracket/show', {
                    user,
                    competingDogs,
                }); 
            });
    });
}


module.exports = {
    index,
    show,
    showBracket,
    increment
}