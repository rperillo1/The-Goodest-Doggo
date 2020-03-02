var express = require('express');
var router = express.Router();
var homeCtrl = require('../controllers/home');

router.get('/', homeCtrl.index);

module.exports = router;



//router.post('/facts', isLoggedIn, studentsCtrl.addFact);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }