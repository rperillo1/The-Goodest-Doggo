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



// function show(req, res, next) {
//         const competingDog = new CompetingDog({
//             bracket: req.params.bracketId,
//             user: req.user._id
//         });
//         console.log('competing dog model', competingDog);
//         CompetingDog.find({}, function(err, competingdog) {
//             competingdog.forEach(each => {
//                 if (each.user !== req.user._id) {
//                     competingDog.save(function(err){
//                         if (err) res.redirect('/bracket/index');
//                         res.redirect(`/bracket/show/${req.params.bracketId}`); 
//                     });
//                 };
//             });
//         });
// }

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
    CompetingDog.find({user: req.user._id}, function(err, competitor){
        User.find({}, function(err, user){
            res.render('bracket/show', {
               user
            }); 
        });
    });
}



module.exports = {
    index,
    show,
    showBracket
}