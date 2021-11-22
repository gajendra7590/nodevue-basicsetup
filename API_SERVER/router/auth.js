var express = require('express')
var router = express.Router();

//Import models
const AuthModel = require('../database/models/AuthModel');

 
// define the home page route
router.post('/login', function (req, res) {
    // console.log(req.body.email);

    let result = AuthModel.login();
     
    res.send(result)
});

// define the about route
router.post('/register', function (req, res) {
  res.send('Register Api Called')
});

module.exports = router;