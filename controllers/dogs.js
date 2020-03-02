const User = require('../models/user');
const Dog = require('../models/dog');
const path = require('path');
const Resize = require('../Resize');


const create = async function (req, res) {
    const imagePath = path.join(process.cwd(), '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      res.status(401).alert({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    Dog.create(req.body, function(err, dog){
        console.log('from dog controller', dog)
        res.redirect(`/profile/${req.user._id}`); 
    });
}


module.exports = {
    create
}
