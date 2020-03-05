var express = require('express');
var router = express.Router();
var profileCtrl = require('../controllers/profile');
const upload = require('../uploadMiddleware');


router.get('/',  isLoggedIn, profileCtrl.index);
router.get('/:id', isLoggedIn, profileCtrl.show);

router.post('/', isLoggedIn, upload.single('image'), profileCtrl.create);
router.delete('/:id', isLoggedIn, profileCtrl.delete);
router.put('/:id', isLoggedIn, profileCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;