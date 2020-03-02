var express = require('express');
var router = express.Router();
const path = require('path');
var profileCtrl = require('../controllers/profile');
const upload = require('../uploadMiddleware');
const Resize = require('../Resize');


router.get('/', profileCtrl.index);

// router.get('/:id', profileCtrl.show);

router.post('/', upload.single('image'), profileCtrl.create);

// router.post('/:id/image', profileCtrl.create);


module.exports = router;