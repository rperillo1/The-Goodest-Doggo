const User = require('../models/user');
const path = require('path');
const Resize = require('../Resize');

function show(req, res) {

}

const create = async function (req, res) {
    const imagePath = path.join(process.cwd(), '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      res.status(401).alert({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    // return res.status(200).json({ name: filename });
    console.log(filename)
    console.log(req.body)
    req.user.dog.push(filename);
    req.user.dog.push(req.body);
    console.log(req.user.dog)
    res.redirect('/profile');
};

// function create(req, res){
//     Flight.findById(req.params.id, function(err, flight){
//         flight.destinations.push(req.body);
//         flight.destinations.sort((a,b) => {
//             let dateA = new Date(a.arrival);
//             let dateB = new Date(b.arrival);
//                 return dateA - dateB;
//         });
//             flight.save(function(err){
//                 res.redirect(`/flights/${flight._id}`)
//             });
//     });
// }


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
    show
};