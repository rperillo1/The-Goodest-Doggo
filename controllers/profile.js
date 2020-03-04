const User = require('../models/user');
const Bracket = require('../models/bracket');
const path = require('path');
const Resize = require('../Resize');


function updateImage(req, res) {

}

function deleteImage(req, res){
  User.findById(req.user._id, function(err, user){
    console.log('image', user.dog[0]);
    user.dog.pop()
    user.save(function(err){
      if (err) return res.redirect('profile/');
      res.redirect('/profile'); 
    });
  });
};


function show(req, res) {
  Bracket.find({}, function(err, bracket){
    User.findById(req.user._id, function(err, user){
      console.log('from user model', user)
      res.render('profile/show', {
          user: user,
          dogName: user.dog[0].name,
          bracket: bracket
        });
      });
  });
}


const create = async function (req, res) {
    const imagePath = path.join(process.cwd(), '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      res.status(401).alert({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    console.log('req.file is', req.file);
    req.body.URL = filename;
    // req.user.dog.push(req.body);
    console.log(req.user.dog[0])
    if (req.user.dog[0]) {
      req.user.dog.shift()
    }
    req.user.dog.push(req.body);
    const user = new User(req.user);
    user.save(function(err){
        if (err) return res.redirect('profile/');
            res.redirect(`/profile/${req.user._id}`);   
    })
};


function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('profile/index', {
        users,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
}

module.exports = {
    index,
    create,
    show,
    delete: deleteImage,
    update: updateImage
};