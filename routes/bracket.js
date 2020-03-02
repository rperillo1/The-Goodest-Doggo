var express = require('express');
var router = express.Router();
var bracketCtrl = require('../controllers/bracket');


router.get('/', bracketCtrl.index);


module.exports = router;