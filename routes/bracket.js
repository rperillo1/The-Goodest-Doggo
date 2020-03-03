var express = require('express');
var router = express.Router();
var bracketCtrl = require('../controllers/bracket');
var competingDogsCtrl = require('../controllers/competing-dogs');


// router.get('/', bracketCtrl.index);
router.get('/', bracketCtrl.index);
router.get('/:bracketId', bracketCtrl.show);


module.exports = router;