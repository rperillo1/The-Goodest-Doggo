const User = require('../models/user');
const CompetingDog = require('../models/competing-dog')
const Bracket = require('../models/bracket');



function increment(req, res) {
    CompetingDog.findOne({bracket: req.params.bracketId, user: req.params.userId}, function(err, competingDog){
        console.log('increment func dogs', competingDog)
        competingDog.votes += 1;
        competingDog.save(function(err){
            res.redirect(`/bracket/showB/${req.params.bracketId}`);
        });
    });
}


function index(req, res, next) {
    let cdArray = [];
    CompetingDog.find({}, function(err, compDog){
        CompetingDog.findOne({user: req.user._id}, function(err, cd) {
            Bracket.find({}, function(err, bracket){
                bracket.forEach(b => {
                    compDog.forEach(dog => {
                        if (b._id.equals(dog.bracket)){
                            cdArray.push(b._id);
                        };
                    })
                });
                console.log('cdArray', cdArray)
                User.findById(req.user._id, function(err, user){
                        res.render('bracket/index', {
                           user,
                           bracket,
                           cd,
                           cdArray
                    });
                });
            });
        })
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
            let round1winners = [], round2winner =[];
            if (competingDogs[0].votes > competingDogs[1].votes){
                round1winners.push(competingDogs[0]);
            } else { round1winners.push(competingDogs[1]); } 
            if (competingDogs[2].votes > competingDogs[3].votes){
                round1winners.push(competingDogs[2]);
            } else { round1winners.push(competingDogs[3]); }
            console.log('round1winners: ', round1winners);
            if (round1winners[0].votes > round1winners[1].votes){
                round2winner.push(round1winners[0]);
            } else { round2winner.push(round1winners[1]) } 
            console.log('round2winner: ', round2winner);
            User.find({}, function(err, user){
                res.render('bracket/show', {
                    user,
                    competingDogs,
                    round1winners,
                    round2winner
                }); 
            });
    });
}

function roundOne(){

}

function roundTwo(){

}


module.exports = {
    index,
    show,
    showBracket,
    increment
}