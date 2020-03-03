var express = require('express');
var router = express.Router();
var profileCtrl = require('../controllers/profile');
const upload = require('../uploadMiddleware');


router.get('/', profileCtrl.index);
router.get('/:id', profileCtrl.show);

router.post('/', upload.single('image'), profileCtrl.create);

router.delete('/', profileCtrl.delete);



module.exports = router;