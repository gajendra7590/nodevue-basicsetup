var express = require('express')
var app = express();
var path = require('path'); 
var multer = require('multer');
var upload = multer();


require('dotenv').config({ path: './.env' }); //Setup custom env 
const port = process.env.PORT || 3000;

//User Body Parser
// for parsing application/json
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 
app.use(upload.array()); 
 
//Import All Routes 
var auth = require('./router/auth');
var user = require('./router/user');  

app.use('/api/auth', auth); 
app.use('/api/user', user); 

app.use(express.static( path.join(__dirname, '../dist'))); 
app.get('/*', function(req, res) { 
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});




