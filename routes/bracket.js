var express = require('express');
var router = express.Router();
var bracketCtrl = require('../controllers/bracket');


// router.get('/', bracketCtrl.index);
router.get('/:userId', isLoggedIn, bracketCtrl.index);
router.get('/show/:bracketId', isLoggedIn, bracketCtrl.show);
router.get('/showB/:bracketId', isLoggedIn, bracketCtrl.showBracket);

router.get('/votes/:userId/:bracketId', isLoggedIn, bracketCtrl.increment);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;