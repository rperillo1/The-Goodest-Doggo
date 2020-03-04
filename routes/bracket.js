var express = require('express');
var router = express.Router();
var bracketCtrl = require('../controllers/bracket');
var competingDogsCtrl = require('../controllers/competing-dogs');


// router.get('/', bracketCtrl.index);
router.get('/:userId', bracketCtrl.index);
router.get('/show/:bracketId', bracketCtrl.show);
router.get('/showB/:bracketId', bracketCtrl.showBracket);

router.get('/votes/:userId/:bracketId', bracketCtrl.increment);


module.exports = router;