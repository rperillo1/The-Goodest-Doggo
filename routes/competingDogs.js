var express = require('express');
var router = express.Router();
var competingDogsCtrl = require('../controllers/competing-dogs');


router.get('/', competingDogsCtrl.index);


module.exports = router;