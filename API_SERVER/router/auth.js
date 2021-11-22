var express = require('express')
var router = express.Router();

 
// define the home page route
router.get('/login', function (req, res) {
    res.send('Login Api Called')
});

// define the about route
router.get('/register', function (req, res) {
  res.send('Register Api Called')
});

module.exports = router;