var express = require('express')
var router = express.Router();

 
 
router.get('/profile', function (req, res) {
    res.send('Api Called For Profile Get')
});

router.post('/profile', function (req, res) {
    res.send('Api Called For Profile Post')
});

 
router.get('/changePassword', function (req, res) {
  res.send('Api Called changePassword Get')
});

router.post('/changePassword', function (req, res) {
    res.send('Api Called changePassword Post')
});

module.exports = router;