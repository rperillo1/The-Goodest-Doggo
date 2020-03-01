var express = require('express');
var router = express.Router();
var profileCtrl = require('../controllers/profile');


router.get('/', profileCtrl.index);

module.exports = router;