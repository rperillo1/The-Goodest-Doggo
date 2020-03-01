var express = require('express');
var router = express.Router();
const path = require('path');
var profileCtrl = require('../controllers/profile');
const upload = require('../uploadMiddleware');
const Resize = require('../Resize');


router.get('/', profileCtrl.index);

// router.post('/', upload.single('image'), async function (req, res) {
//     await console.log('post');
//   });

router.post('/', upload.single('image'), async function (req, res) {
    const imagePath = path.join(process.cwd(), '/public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ name: filename });
});

module.exports = router;